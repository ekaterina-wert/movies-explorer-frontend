import './SearchForm.css';
import React from 'react';
import findIcon from '../../../images/find-icon.svg';

function SearchForm(props) {
    const [search, setSearch] = React.useState({
        search: '',
    });


    function handleChangeData(e) {
        const { name, value } = e.target;

        setSearch({
            [name]: value
        })
    }

    return (
        <div className='searchForm'>
            <form className='searchForm__form'>
                <fieldset className='searchForm__input-container'>
                    <div className='searchForm__searchBar-container'>
                    <input
                        type="text"
                        className="searchForm__text searchForm__text_type_input"
                        name="search"
                        // value={userData.email}
                        onChange={handleChangeData}
                        placeholder='Фильм'
                        required
                    />
                    <button className='searchForm__submit'></button>
                    </div>

                    <label className="searchForm__switch">
                        <input
                            type="checkbox"
                            className="searchForm__checkbox"
                            name="movie-type"
                            id="short_film"
                            value='short_film'
                            onChange={handleChangeData}
                            required
                        />
                        <span className='searchForm__slider'></span>
                        <span className="searchForm__text searchForm__text_type_title">Короткометражки</span>
                    </label>
                    {/* <span className="searchForm__text">Короткометражки</span> */}
                </fieldset>

            </form>
        </div>
    )
};

export default SearchForm;