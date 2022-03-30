import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {addNote} from '@store/actions';

const Task3Form = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (body: Record<string, unknown>) => {
        body.id = Math.ceil(Math.random() * 1000);
        dispatch(addNote(body));
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-cont">
            <h4>Add the article</h4>
            <input type="text" {...register('title')} placeholder="Title" className="title-inp" />
            <textarea {...register('text')} placeholder="Text" />
            <input type="submit" className="but-inp" />
        </form>
    );
};

export default Task3Form;
