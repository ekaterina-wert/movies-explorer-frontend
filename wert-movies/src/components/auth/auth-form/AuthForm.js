import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import logo from '../../../images/logo.svg';

function AuthForm(props) {
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

    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit(userData)
    }

    return (
        <div className="auth">
            <img className="auth__logo" src={logo} alt="Это wert-movies." />
            <p className="auth__title">{props.greeting}</p>

            <form className="auth__form"
                onSubmit={handleSubmit}
            >
                <fieldset className="auth__input-container">
                    {props.children}
                    <label className="auth__label">E-mail</label>
                    <input
                        type="email"
                        className="auth__text auth__text_type_email"
                        name="email"
                        value={userData.email}
                        onChange={handleChangeData}
                        required
                    />
                    <span className="auth__input-error email-input-error">Что-то пошло не так...</span>

                    <label className="auth__label">Пароль</label>
                    <input
                        type="password"
                        className="auth__text auth__text_type_password"
                        name="password"
                        value={userData.password}
                        onChange={handleChangeData}
                        required
                    />
                    <span className="auth__input-error password-input-error">Что-то пошло не так...</span>
                </fieldset>
                <div className="auth__auth-container">
                    <button className="auth__submit" type="submit">{props.buttonTitle}</button>
                    <p className='auth__redirection-text'>{props.redirectionText}
                        <Link to={props.link} className="auth__link">{props.redirectionLink}</Link>
                    </p>
                </div>
            </form>

        </div>
    )
}

export default AuthForm;