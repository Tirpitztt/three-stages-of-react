import React from 'react';
import './routing-task.page.scss';
import {useHistory} from 'react-router';
import {useTypedSelector} from '@shared/hooks/typed.hook';
import Task3Form from '@pages/routing-task.form';
import {useDispatch} from 'react-redux';
import {deleteNote} from '@store/actions';

const RoutingTask1Page = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useTypedSelector((state) => state.task3);
    const delNote = (id: number) => {
        dispatch(deleteNote(id));
    };
    const noteList = state.notes.map((item, i) => {
        return (
            <div key={i} className="note-wrap">
                <div className="content-wrap">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
                <button onClick={() => delNote(item.id)}>delete note</button>
            </div>
        );
    });
    return (
        <div>
            <div>Page1</div>
            <Task3Form />
            <div>{noteList}</div>
            <div>
                <button onClick={() => history.push('/task3/text')} className="routing-button">
                    to page Task3
                </button>
            </div>
        </div>
    );
};

export default RoutingTask1Page;
