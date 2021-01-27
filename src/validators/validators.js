export const requiredField = value => {
    if(value){
        return undefined;
    }
    else {
        return 'Обязательное поле не заполнено'
    }
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return "max Length is "+ maxLength + "symbols";
    } else {
        return undefined;
    }
}