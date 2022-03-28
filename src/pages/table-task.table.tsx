import React from 'react';

export type PropTypes = {
    id: number;
    name?: string;
    location?: string;
    del: (id: number) => void;
    edit: (id: number) => void;
};

export const Table: React.FC<PropTypes> = ({id, name, location, del, edit}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{location}</td>
            <td>
                <button onClick={() => del(id)}>del</button>
            </td>
            <td>
                <button onClick={() => edit(id)}>edit</button>
            </td>
        </tr>
    );
};
