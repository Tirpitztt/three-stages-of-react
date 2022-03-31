import React from 'react';
import './home.page.scss';
import {useTypedSelector} from '@shared/hooks/typed.hook';
import NoteCard from '@pages/routing-task.note';

const RoutingTask2Page = () => {
    const state = useTypedSelector((state) => state.task3);
    const noteList = state.notes.map((item, i) => {
        console.log(item);
        return <NoteCard key={i} title={item.title} text={item.text} />;
    });
    return <div className="note-desk">{noteList}</div>;
};

export default RoutingTask2Page;
