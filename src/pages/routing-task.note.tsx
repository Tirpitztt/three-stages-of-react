import React from 'react';

type PropsType = {
    title: string;
    text: string;
};

const NoteCard: React.FC<PropsType> = ({title, text}) => {
    return (
        <div className="note">
            <div className="title-section">
                <h3>{title}</h3>
            </div>
            <div className="text-section">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default NoteCard;
