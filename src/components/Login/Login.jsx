import React from 'react';
import './Login.css';
import FormContainer from '../FormContainer/FormContainer';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className='login'>
      <FormContainer
        title='Рады видеть!'
        name='login'
        onSubmit={handleSubmit}
        buttonText='Войти'
      >
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className='form__input'
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
            className='form__input'
            name='password'
            type='password'
            minLength='6'
            maxLength='100'
            id='password'
            required
            placeholder='Пароль'
          />
        </fieldset>
      </FormContainer>
    </main>
  );
}

export default Login;
