import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../../images/logo.svg';

function Login(props) {
    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
    });

    function handleChangeData(e) {
        const { name, value } = e.target;

        setUserData({
            ...userData,
            [name]: value
        })
    }

    //     function handleSubmit(e){
    //       e.preventDefault();

    //       props.onLogin(userData)
    //    }

    return (
        <div className="login">
                <img className="login__logo" src={logo} alt="Добро пожаловать! Это wert-movies." />
                <p className="login__title">Рады видеть!</p>

            <form className="login__form"
            // onSubmit={handleSubmit} 
            >
                <fieldset className="login__input-container">
                    <label className="login__label">E-mail</label>
                    <input
                        type="email"
                        className="login__text login__text_type_email"
                        name="email"
                        value={userData.email}
                        onChange={handleChangeData}
                        required
                    />
                    <label className="login__label">Пароль</label>
                    <input
                        type="password"
                        className="login__text login__text_type_password"
                        name="password"
                        value={userData.password}
                        onChange={handleChangeData}
                        required
                    />
                </fieldset>
                <div className="login__auth-container">
                    <button className="login__submit" type="submit">Войти</button>
                    <p className='login__redirection-text'>Еще не зарегистрированы?
                        <Link to="/signin" className="login__link">   Регистрация</Link>
                    </p>
                </div>
            </form>

        </div>
    )
}

export default Login;