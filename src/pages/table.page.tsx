import React, {useEffect, useState} from 'react';
import './table-task.page.scss';
import {getDataReq} from '../REST/utils';
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
        getDataReq(setState);
    }, []);
    const addNote = (body: Record<string, unknown>) => {
        body.id = currentId + 1;
        addData(body);
        getDataReq(setState);
    };
    function delNote(id: number) {
        deleteData(id);
        getDataReq(setState);
    }
    const editNoteButton = (id: number) => {
        searchData(id).then((data) => {
            setPropsObj(data[0]);
        });
        setShowModal(true);
        setEdit(true);
    };
    const editNote = (id: number, body: Record<string, unknown>) => {
        updateData(id, body);
        setEdit(false);
        getDataReq(setState);
    };
    const showMod = () => {
        setShowModal(true);
    };
    function hideModal() {
        setShowModal(false);
        setEdit(false);
        getDataReq(setState);
    }
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
        <div className="content-wrapper">
            <div className="button-panel">
                <button onClick={showMod} className="add-but">
                    Add new
                </button>
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Commands</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{list}</tbody>
                </table>
            </div>
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
