import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [userData, setUserData] = React.useState({
        name: '',
        email: '',
    });

    // Реализация очистки полей формы при открытии
    React.useEffect(() => {
        // Проверяем, чтоб данные пользователя не были undefined, иначе ругается консоль
        (currentUser.name !== undefined && currentUser.email !== undefined) && setUserData({name: currentUser.name, email: currentUser.email});
        // currentUser.email !== undefined && setUserData(currentUser.email);
    }, [currentUser, props.isOpen]);

    // Определяем режим редактирования профиля
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

        props.onChangeUserInfo(userData)
        setIsEdit(false);
    }

    return (
        <div className="profile">
            <Header />
            <p className="profile__title">Привет, {currentUser.name}!</p>
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
                            value={userData.name}
                            onChange={handleChangeData}
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
                            value={userData.email}
                             onChange={handleChangeData}
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
                    >
                        Редактировать
                    </button>
                    <Link to='/signin' onClick={props.onLogout} className="profile__text profile__text_type_signout">Выйти из аккаунта</Link>
                </div>
            }
            <Footer />
        </div >
    )
}

export default Profile;