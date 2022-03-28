import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';

type PropsTypesModal = {
    edit: boolean;
    show: boolean;
    obj?: Record<string, string>;
    hide: () => void;
    addNote: (body: Record<string, unknown>) => void;
    editNote: (id: number, body: Record<string, unknown>) => void;
};

const ModalAdd: React.FC<PropsTypesModal> = ({edit, show, obj, hide, addNote, editNote}) => {
    const {register, handleSubmit, setValue} = useForm();
    if (edit) {
        setValue('name', obj ? obj.name : '');
        setValue('location', obj ? obj.location : '');
    }
    const classShow = 'class-show';
    const classHide = 'class-hide';
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('name', e.target.value);
    };
    const changeLoc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('location', e.target.value);
    };
    const addMode = (
        <div>
            <p>add data</p>
            <input type="text" {...register('name')} placeholder="name" />
            <input type="text" {...register('location')} placeholder="location" />
        </div>
    );
    const editMode = (
        <div>
            <p>edit data</p>
            <input type="text" {...register('name', {onChange: (e) => changeName(e)})} />
            <input type="text" {...register('location', {onChange: (e) => changeLoc(e)})} />
        </div>
    );
    const onSubmit = (body: Record<string, unknown>) => {
        if (edit) {
            if (obj) {
                body.id = obj.id;
                editNote(+obj.id, body);
            } else {
                console.log('error: no object');
            }
        } else {
            addNote(body);
        }
    };
    return (
        <div className={show ? classShow : classHide}>
            <div>
                <div className="close-modal">
                    <p onClick={hide}>X</p>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {edit ? editMode : addMode}
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalAdd;
