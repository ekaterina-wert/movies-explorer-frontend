import React from 'react';
import AuthForm from './auth-form/AuthForm';

function Login(props) {
    function handleLogin(userData) {
        props.onLogin(userData)
    }

    return (
        <AuthForm
            greeting='Рады видеть!'
            buttonTitle='Войти'
            redirectionText='Еще не зарегистрированы?'
            link='/signup'
            redirectionLink='&emsp;Регистрация'
            onSubmit={handleLogin}
        />
    )
}

export default Login;