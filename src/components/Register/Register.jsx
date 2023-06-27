import React from 'react';
import './Register.css';
import FormContainer from '../FormContainer/FormContainer';

function Register() {
  // useState для проверки текста ошибки
  const [isActiveError, setIsActiveError] = React.useState(true);

  console.log(setIsActiveError);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className='register'>
      <FormContainer
        title='Добро пожаловать!'
        name='register'
        onSubmit={handleSubmit}
        buttonText='Зарегистрироваться'
      >
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='name'>
            Имя
          </label>
          <input
            className='form__input focus'
            name='name'
            type='text'
            minLength='2'
            maxLength='40'
            id='name'
            required
            placeholder='Надежда'
          />
        </fieldset>
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='form__input focus'
            name='email'
            type='email'
            minLength='2'
            maxLength='40'
            id='email'
            required
            placeholder='pochta@yandex.ru'
          />
        </fieldset>
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className='form__input form__input_error'
            name='password'
            type='password'
            minLength='6'
            maxLength='100'
            id='password'
            required
            placeholder='Пароль'
          />
          <span
            id='name-error'
            className={`form__error ${
              isActiveError ? 'form__error_visible' : ''
            } `}
          >
            Что-то пошло не так...
          </span>
        </fieldset>
      </FormContainer>
    </main>
  );
}
export default Register;
