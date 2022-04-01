import React from 'react';
import './table-task.page.scss';
import {useForm} from 'react-hook-form';

type PropsTypesModal = {
    edit: boolean;
    show: boolean;
    obj?: Record<string, string>;
    hide: () => void;
    addNote: (body: Record<string, unknown>) => void;
    editNote: (id: number, body: Record<string, unknown>) => void;
};
type FormInputs = {
    name: string;
    location: string;
};

const ModalAdd: React.FC<PropsTypesModal> = ({edit, show, obj, hide, addNote, editNote}) => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: {isDirty},
    } = useForm<FormInputs>();
    if (edit && !isDirty) {
        setValue('name', obj ? obj.name : '');
        setValue('location', obj ? obj.location : '');
    }
    const classShow = 'class-show';
    const classHide = 'class-hide';
    const closeModal = () => {
        reset();
        hide();
    };
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('name', e.target.value);
    };
    const changeLoc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('location', e.target.value);
    };
    const addMode = (
        <div className="input-wrap">
            <p>add data</p>
            <input type="text" {...register('name')} placeholder="name" />
            <input type="text" {...register('location')} placeholder="location" />
        </div>
    );
    const editMode = (
        <div className="input-wrap">
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
                reset();
                hide();
            } else {
                console.log('error: no object');
            }
        } else {
            addNote(body);
            reset();
            hide();
        }
    };
    return (
        <div className={show ? classShow : classHide}>
            <div className="modal-card">
                <div className="close-modal">
                    <p onClick={closeModal}>X</p>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {edit ? editMode : addMode}
                        <input className="sub-but" type="submit" value="Send" disabled={!isDirty} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalAdd;
