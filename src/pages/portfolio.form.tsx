import React from 'react';
import {useForm} from 'react-hook-form';

const PortfolioForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const isEmail = (val: string): boolean => {
        const regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
        if (!regExp.test(val)) {
            return false;
        }
        return true;
    };
    const onSubmit = (body: Record<string, unknown>) => {
        console.log(body);
    };
    return (
        <div className="portfolio-form-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Book this tour</h3>
                <input
                    type="text"
                    placeholder="name"
                    {...register('name', {required: true, maxLength: 30})}
                />
                {errors.name && errors.name.type === 'required' && (
                    <p className="p-error">Fields must be full</p>
                )}
                <input
                    type="text"
                    placeholder="e-mail"
                    {...register('mail', {required: true, validate: (input) => isEmail(input)})}
                />
                {errors.mail && errors.mail.type === 'required' && (
                    <p className="p-error">Fields must be full</p>
                )}
                {errors.mail && errors.mail.type === 'validate' && (
                    <p className="p-error">E-mail address not valid</p>
                )}
                <input type="submit" className="but-sbmt" value="submit" />
            </form>
        </div>
    );
};

export default PortfolioForm;
