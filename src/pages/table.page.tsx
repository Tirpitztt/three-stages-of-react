import React, {useEffect, useState} from 'react';
import './home.page.scss';
import {addData, deleteData, getData, searchData, updateData} from '../REST/api';
import {Table, PropTypes} from './table-task.table';
import ModalAdd from '@pages/table-task.modal-add';

const TablePage = () => {
    const [state, setState] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [propsObj, setPropsObj] = useState({});
    let currentId: number = 0;
    useEffect(() => {
        getData().then((data) => {
            setState(data);
        });
    }, []);
    const addNote = (body: Record<string, unknown>) => {
        body.id = currentId + 1;
        addData(body);
    };
    const delNote = (id: number): void => {
        deleteData(id);
    };
    const editNoteButton = (id: number) => {
        searchData(id).then((data) => {
            setPropsObj(data[0]);
        });
        setShowModal(true);
        setEdit(true);
    };
    const editNote = (id: number, body: Record<string, unknown>) => {
        updateData(id, body);
    };
    const showMod = () => {
        setShowModal(true);
    };
    const hideModal = () => {
        setShowModal(false);
    };
    let list: any[] = [];
    if (state) {
        list = state.map((item, i) => {
            currentId = item.id;
            return (
                <Table
                    key={i}
                    id={item.id}
                    name={item.name}
                    location={item.location}
                    del={delNote}
                    edit={editNoteButton}
                />
            );
        });
    }
    return (
        <div>
            <div>Start your table here</div>
            <div>
                <button onClick={showMod}>add</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>{list}</tbody>
            </table>
            <ModalAdd
                edit={edit}
                show={showModal}
                obj={propsObj}
                hide={hideModal}
                addNote={addNote}
                editNote={editNote}
            />
        </div>
    );
};

export default TablePage;
