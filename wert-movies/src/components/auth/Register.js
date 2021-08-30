import React from 'react';
import AuthForm from './auth-form/AuthForm';

function Register(props) {
    const [userName, setUserName] = React.useState({
        name: '',
    });

    function handleChangeData(e) {
        const { name, value } = e.target;

        setUserName({
            [name]: value
        })
    }

    function handleRegister(userData) {
        const fullData = {...userData, ...userName}
        console.log(fullData)
        props.onRegister(fullData)
    }

    return (
        <AuthForm
            greeting='Добро пожаловать!'
            buttonTitle='Зарегистрироваться'
            redirectionText='Уже зарегистрированы?'
            link='/signin'
            redirectionLink='&emsp;Войти'
            onSubmit={handleRegister}
        >
            <label className="auth__label">Имя</label>
            <input
                type="name"
                className="auth__text auth__text_type_name"
                name="name"
                value={userName.name}
                onChange={handleChangeData}
                required
            />
            <span className="auth__input-error name-input-error">Что-то пошло не так...</span>
        </AuthForm>
    )
}

export default Register;