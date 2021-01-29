import React from 'react';
import Select from 'react-select';
import classes from "./FormControls.module.css";
import "./react-select.css";

export const renderField = ({input, label, placeholder, type, meta: {touched, error}}) => (
    <div className={classes.form__input_block}>
        <label className={classes.form__label}>{label}</label>
        <div className={classes.form__input_element}>
            <input {...input} placeholder={placeholder} type={type} />
            {touched && (error && <span className={classes.form__error}>{error}</span>)}
        </div>
    </div>
);
export const renderCheckbox = ({input, label, type, id, meta: {touched, error}}) => (
        <div className={classes.form__input_block}>
            <input {...input} id={id} className={classes.form__checkbox} type={type}/>
            <label for={id} className={classes.form__checkbox_label}>{label}</label>
            {touched && (error && <span className={classes.form__error}>{error}</span>)}
        </div>
);
export const renderSelect = props => {
    const { input, options, label, placeholder, className, classNamePrefix} = props;

    const handleBlur = () => {
        setTimeout(() => {
            const { input } = props;
            input.onBlur(input.value);
        }, 1);
    };
    return (
        <div className={classes.form__input_block}>
            <label className={classes.form__label}>{label}</label>
            <div className={classes.form__select}>
                <Select
                    {...input}
                    onChange={value => input.onChange(value)}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    options={options}
                    className={className}
                    classNamePrefix={classNamePrefix}
                />
            </div>
        </div>
    )
}