import React from 'react';
import './routing-task.page.scss';
import {useTypedSelector} from '@shared/hooks/typed.hook';
import Task3Form from '@pages/routing-task.form';
import {useDispatch} from 'react-redux';
import {deleteNote} from '@store/actions';

const RoutingTask1Page = () => {
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
                <div className="button-wrap">
                    <button onClick={() => delNote(item.id)}>Remove note</button>
                </div>
            </div>
        );
    });
    return (
        <div>
            <div className="task-wrap">
                <div className="form-side">
                    <div className="form-wrap">
                        <Task3Form />
                    </div>
                </div>
                <div className="list-side">
                    <div>{noteList}</div>
                </div>
            </div>
        </div>
    );
};

export default RoutingTask1Page;
