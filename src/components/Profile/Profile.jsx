import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function Profile() {
  //profile__title, placeholder в PixelPerfect отличается, если заменить
  // на имя Виталий, все будет совпадать
  const { values, valid, handleChange, error } = useForm();
  const [edit, setEdit] = React.useState(false);
  const navigate = useNavigate();

  function submitForm(e) {
    e.preventDefault();
  }

  function handleEdit() {
    setEdit(!edit);
  }

  return (
    <>
      <Header />
      <main className='profile'>
        <section className='profile__section'>
          <h1 className='profile__title'>Привет, Надежда!</h1>
          <form className='profile__form' onSubmit={submitForm} name='account'>
            <fieldset className='profile__fieldset profile__fieldset_form'>
              <label className='profile__name' htmlFor='name'>
                Имя
              </label>
              <input
                className={`profile__input ${
                  error.name ? 'profile__user_error' : ''
                }`}
                name='name'
                type='text'
                minLength='2'
                maxLength='40'
                id='name'
                required
                placeholder='Надежда'
                onChange={handleChange}
                value={values.name || ''}
                disabled={edit ? false : true}
              />
            </fieldset>
            <fieldset className='profile__fieldset profile__fieldset_form'>
              <label className='profile__name' htmlFor='email'>
                E-mail
              </label>
              <input
                className={`profile__input ${
                  error.name ? 'profile__user_error' : ''
                }`}
                name='email'
                type='email'
                minLength='6'
                maxLength='40'
                id='email'
                required
                placeholder='pochta@yandex.ru'
                onChange={handleChange}
                value={values.email || ''}
                disabled={edit ? false : true}
              />
            </fieldset>
            {/* ниже код для проверки вывода сообщения */}
            {/* {!valid ? (
            <>
              {edit ? (
                <span id='name-error' className='profile__error_active'>
                  При обновлении профиля произошла ошибка.
                </span>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )} */}
            {edit && (
              <button
                className='profile__save-form'
                type='submit'
                disabled={valid ? false : true}
              >
                Сохранить
              </button>
            )}
          </form>
          {edit ? (
            ''
          ) : (
            <>
              <button
                className='profile__edit-form'
                type='button'
                onClick={handleEdit}
              >
                Редактировать
              </button>
              <button
                type='button'
                className='profile__exit-form'
                onClick={() => navigate('/')}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
