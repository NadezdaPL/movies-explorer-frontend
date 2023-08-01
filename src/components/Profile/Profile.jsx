import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import useForm from '../../hooks/useForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({
  loggedIn,
  updateUser,
  logout,
  success,
  errorApi,
  isLoading,
}) {
  const { values, valid, handleChange, error, setValues, setValid } = useForm();
  const currentUser = React.useContext(CurrentUserContext);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
      setValid(true);
    }
  }, [setValid, setValues, currentUser]);

  React.useEffect(() => {
    if (success) {
      setErrorMessage(false);
      setSuccessMessage(true);
    }
  }, [success, errorApi]);

  function submitForm(e) {
    e.preventDefault();
    updateUser(values);
  }

  function handleEditButton(e) {
    e.preventDefault();
    setErrorMessage(true);
    setSuccessMessage(false);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='profile'>
        <section className='profile__section'>
          <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
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
                disabled={!errorMessage}
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
                id='email'
                required
                placeholder='pochta@yandex.ru'
                onChange={handleChange}
                value={values.email || ''}
                disabled={!errorMessage}
              />
            </fieldset>
            {successMessage && (
              <span className='profile__success'>Данные успешно изменены</span>
            )}
            {errorMessage ? (
              <button
                type='submit'
                className='profile__save-form'
                disabled={
                  !valid ||
                  (values.name === currentUser.name &&
                    values.email === currentUser.email) ||
                  isLoading
                }
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className='profile__edit-form'
                  type='button'
                  onClick={handleEditButton}
                >
                  Редактировать
                </button>
                <button
                  type='button'
                  className='profile__exit-form'
                  onClick={logout}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
