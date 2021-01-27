import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../validators/validators";
import {renderField} from "./FormControls";

const maxLength30 = maxLengthCreator(30);

let RegisterForm = (props) => {
    const { handleSubmit, submitting } = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field placeholder={"Введите ваше имя"} type={"text"} component={renderField} name={"name"} validate={[requiredField, maxLength30]}/>
                <Field type={"email"} placeholder={"Введите ваш email"} component={renderField} name={"email"}/>
                <Field placeholder={"Введите номер телефона"} type="text" component={renderField} name={"phone"}/>
                <Field type={"checkbox"} component={renderField} name={"accept"}/>
                <button disabled={submitting}>register</button>
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