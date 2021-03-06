class Validators{
    requiredField = value => {
        if(value){
            return undefined;
        }
        else {
            return 'Обязательное поле не заполнено'
        }
    };
    maxLengthCreator = (maxLength) => (value) => {
        if (value && value.length > maxLength) {
            return "Максимальная длина "+ maxLength + " символов";
        } else {
            return undefined;
        }
    };
    validName = value =>{
        if(value && (/^([a-zA-ZА-Яа-я '-])+$/.test(value))){
            return undefined
        }
        else {
            return 'Введено некорректное значение';
        }
    };
    validEmail = value =>{
        if(value && (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))){
            return undefined
        }
        else {
            return 'Введено некорректное значение';
        }
    };
    validPhone = value =>{
        if(value && (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(value))){
            return undefined
        }
        else {
            return 'Введено некорректное значение';
        }
    };
}
export default Validators;