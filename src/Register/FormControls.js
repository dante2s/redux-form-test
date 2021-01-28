import React from 'react';
import Select from 'react-select'
export const renderField = ({input, label, placeholder, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} />
            {touched && (error && <span>{error}</span>)}
        </div>
    </div>
);
export const renderCheckbox = ({input, label, type, name, meta: {touched, error}}) => (
        <div>
            <label><input {...input} type={type}/>{label}</label>
            {touched && (error && <span>{error}</span>)}
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
        <div>
            <label>{label}</label>
            <div>
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