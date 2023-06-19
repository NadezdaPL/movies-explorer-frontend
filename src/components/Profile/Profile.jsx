import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile() {
  // useState для проверки состояния кнопки и ошибки:
  // - const [saveButton, setSaveButton] = React.useState(true) - кнопка Сохранить неактивна
  // - (const [saveButton, setSaveButton] = React.useState(true),
  // const [isActive, setIsActive] = React.useState(false)) - кнопка Сохранить неактивна, текст оишбки активен
  const [isActive, setIsActive] = React.useState(true);
  const [saveButton, setSaveButton] = React.useState(false);

  console.log(setIsActive);
  console.log(setSaveButton);

  return (
    <>
      <Header />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Надежда!</h2>
        <form className='profile__form'>
          <fieldset className='profile__form_name'>
            <label className='profile__name'>Имя</label>
            <input
              className='profile__user'
              name='name'
              type='text'
              minLength='2'
              maxLength='40'
              id='name'
              required
              placeholder='Надежда'
            />
          </fieldset>
          <hr className='profile__form_line'></hr>
          <fieldset className='profile__form_email'>
            <label className='profile__name'>E-mail</label>
            <input
              className='profile__email'
              name='email'
              type='email'
              minLength='2'
              maxLength='40'
              id='email'
              required
              placeholder='pochta@yandex.ru'
            />
          </fieldset>
        </form>
        {saveButton ? (
          <>
            <span
              id='name-error'
              className={`profile__error ${
                isActive ? '' : 'profile__error_visible'
              } `}
            >
              При обновлении профиля произошла ошибка.
            </span>
            <button className='profile__form_save' type='submit'>
              Сохранить
            </button>
          </>
        ) : (
          <>
            <button className='profile__form_edit' type='submit'>
              Редактировать
            </button>
            <Link className='profile__form_exit' to='/signin'>
              Выйти из аккаунта
            </Link>
          </>
        )}
      </section>
    </>
  );
}

export default Profile;
