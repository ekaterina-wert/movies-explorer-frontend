import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import logo from '../../../images/logo.svg';

function Profile(props) {
    const [userData, setUserData] = React.useState({
        email: '',
        password: '',
    });

    // Определяем, нажата ли кнопка редактирования профиля
    // const isEdit = props.likes.some(like => like._id === currentUser._id);
    const [isEdit, setIsEdit] = React.useState(false);

    function handleEditProfile() {
        setIsEdit(true);
    }

    function handleChangeData(e) {
        const { name, value } = e.target;

        setUserData({
            ...userData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        // props.onSubmit(userData)

        setIsEdit(false);
    }

    return (
        <div className="profile">
            <p className="profile__title">Привет, {props.name}!</p>

            {/* <ul className="profile__user-container">
                <li className="profile__user-info">
                    <span className='profile__text profile__text_header'>Имя</span>
                    <span className='profile__text'>{props.name}</span>
                </li>
                <li className="profile__user-info">
                    <span className='profile__text profile__text_type_header'>E-mail</span>
                    <span className='profile__text'>{props.email}</span>
                </li>
            </ul> */}

            <form
                id='edit-profile'
                className="profile__form"
                onSubmit={handleSubmit}
            >
                <fieldset className="profile__user-container">
                    <div className="profile__user-info">
                        <label className="profile__label">Имя</label>
                        <input
                            type="name"
                            className="profile__text profile__text_type_input profile__text_id_name"
                            name="name"
                            value={props.name}
                            // value={userName.name}
                            // onChange={handleChangeData}
                            disabled={!isEdit}
                            required
                        />
                    </div>

                    <div className="profile__user-info">
                        <label className="profile__label">E-mail</label>
                        <input
                            type="email"
                            className="profile__text profile__text_type_input profile__text_id_email"
                            name="email"
                            value={props.email}
                            // value={userData.email}
                            // onChange={handleChangeData}
                            disabled={!isEdit}
                            required
                        />
                    </div>
                </fieldset>

            </form>

            {isEdit &&
                <button className="profile__submit" type="submit" form='edit-profile'>Сохранить</button>
            }

            {!isEdit &&
                <div className="profile__actions-container">
                    <button
                        className="profile__text profile__text_type_edit-button"
                        type="button" id="edit-button"
                        aria-label="Редактировать профиль"
                        onClick={handleEditProfile}
                    // onClick={props.onClick}
                    >
                        Редактировать
                    </button>
                    <Link to='/signout' className="profile__text profile__text_type_signout">Выйти из аккаунта</Link>
                </div>
            }
        </div >
    )
}

export default Profile;