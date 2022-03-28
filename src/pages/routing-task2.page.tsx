import React from 'react';
import './home.page.scss';
import {useHistory} from 'react-router';
import {useTypedSelector} from '@shared/hooks/typed.hook';
import NoteCard from '@pages/routing-task.note';

const RoutingTask2Page = () => {
    const history = useHistory();
    const state = useTypedSelector((state) => state.task3);
    const noteList = state.notes.map((item, i) => {
        console.log(item);
        return <NoteCard key={i} props={item} />;
    });
    return (
        <div>
            <div>Page2</div>
            <div>{noteList}</div>
            <div>
                <button onClick={() => history.push('/task3/reduct')} className="routing-button">
                    to page Task3
                </button>
            </div>
        </div>
    );
};

export default RoutingTask2Page;
