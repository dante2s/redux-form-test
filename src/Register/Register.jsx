import React from 'react';
import {Field, reduxForm} from "redux-form";
import Validators from "../validators/validators";
import {renderField} from "./FormControls";

let ValidatorObject = new Validators();
const maxLength30 = ValidatorObject.maxLengthCreator(30);
const requiredField = ValidatorObject.requiredField;
const validEmail = ValidatorObject.validEmail;
const validName = ValidatorObject.validName;
const validPhone = ValidatorObject.validPhone;

let RegisterForm = (props) => {
    const { handleSubmit, submitting, pristine, invalid  } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field label={"Имя"}
                       placeholder={"Введите ваше имя"}
                       type={"text"}
                       component={renderField}
                       name={"name"}
                       validate={[requiredField, maxLength30, validName]}/>

                <Field label={"Email"}
                       placeholder={"Введите ваш email"}
                       type={"email"}
                       component={renderField}
                       name={"email"}
                       validate={[requiredField, validEmail]}/>

                <Field label={"Телефон"}
                       placeholder={"Введите номер телефона"}
                       type="text"
                       component={renderField}
                       name={"phone"}
                       validate={[requiredField, validPhone]}/>

                <Field type={"checkbox"}
                       component={renderField}
                       name={"accept"}
                       validate={requiredField}/>
                <button disabled={pristine || invalid || submitting}>register</button>
            </form>
        </div>
    )

}

const ReduxRegisterForm = reduxForm({
    form: "register"
})(RegisterForm);

const Register = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    };
        return (
            <div>
                <ReduxRegisterForm onSubmit={onSubmit}/>
            </div>
        )
}
export default Register;