export const renderField = ({ input, placeholder, type, meta: { touched, error } }) => (
        <div>
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && (error && <span>{error}</span>)}
        </div>
)