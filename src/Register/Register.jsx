import React from 'react';
import {Field, reduxForm} from "redux-form";
import Validators from "../validators/validators";
import {renderCheckbox, renderField, renderSelect} from "../FormControls/FormControls";
import classes from "./Register.module.css";

let ValidatorObject = new Validators();
const maxLength30 = ValidatorObject.maxLengthCreator(30);
const requiredField = ValidatorObject.requiredField;
const validEmail = ValidatorObject.validEmail;
const validName = ValidatorObject.validName;
const validPhone = ValidatorObject.validPhone;
//по-хорошему, эти данные должны попадать сюда через props
const userOptions = [
    {
        label: 'Русский',
        value: 'russian',
    },
    {
        label: 'Английский',
        value: 'english',
    },
    {
        label: 'Китайский',
        value: 'chinese',
    },
    {
        label: 'Испанский',
        value: 'spanish',
    },
];

let RegisterForm = (props) => {
    const { handleSubmit, submitting, pristine, invalid  } = props;
    return (
        <div className={classes.form__container}>
            <div className={classes.form__header}>
                <span>Регистрация</span>
                Уже есть аккаунт? <a href="#">Войти</a>
            </div>
            <form className={classes.form__block} onSubmit={handleSubmit}>
                <Field label={"Имя"}
                       placeholder={"Введите ваше имя"}
                       type={"text"}
                       component={renderField}
                       name={"name"}
                       validate={[requiredField, maxLength30, validName]}
                />

                <Field label={"Email"}
                       placeholder={"Введите ваш email"}
                       type={"email"}
                       component={renderField}
                       name={"email"}
                       validate={[requiredField, validEmail]}
                />

                <Field label={"Телефон"}
                       placeholder={"Введите номер телефона"}
                       type="text"
                       component={renderField}
                       name={"phone"}
                       validate={[requiredField, validPhone]}
                />

                <Field name={"currentLanguage"}
                       component={renderSelect}
                       options={userOptions}
                       placeholder={"Язык"}
                       label={"Язык"}
                       className={'selectContainer'}
                       classNamePrefix={'react-select'}
                />
                <Field type={"checkbox"}
                       id={"accept"}
                       component={renderCheckbox}
                       name={"accept"}
                       validate={requiredField}
                       label={["Принимаю ", <a href='#'>условия</a> ," использования"]}
                />
                <button className={classes.form__register} disabled={pristine || invalid || submitting}>Зарегистрироваться</button>
            </form>
        </div>
    )

}

const ReduxRegisterForm = reduxForm({
    form: "register"
})(RegisterForm);

const Register = () => {
    const onSubmit = (formData) => {
        //форма ничего не отправляет. для наглядности сделал alert
        let text = 'Язык:' + formData.currentLanguage.label + '\n' +
            'E-mail:' + formData.email + '\n' +
            'Имя:' + formData.name + '\n' +
            'Телефон:' + formData.phone;
        console.log(formData);
        alert(text);
    };
        return (
            <div>
                <ReduxRegisterForm onSubmit={onSubmit}/>
            </div>
        )
};
export default Register;