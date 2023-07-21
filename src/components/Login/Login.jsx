import React from 'react';
import './Login.css';
import FormContainer from '../FormContainer/FormContainer';
import useForm from '../../hooks/useForm';
import { Navigate } from 'react-router-dom';
import { REGEX_EMAIL } from '../../utils/constants';

function Login({ onLogin, loggedIn }) {
  const { values, handleChange, error, valid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  return loggedIn ? (
    <Navigate to='/' replace />
  ) : (
    <main className='login'>
      <FormContainer
        title='Рады видеть!'
        name='login'
        onSubmit={handleSubmit}
        buttonText='Войти'
        valid={valid}
        isDisable={!valid}
      >
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='email'>
            E-mail
          </label>
          <input
            className={`form__input ${error.email ? 'form__input_error' : ''}`}
            name='email'
            type='email'
            id='email'
            required
            placeholder='pochta@yandex.ru'
            onChange={handleChange}
            value={values.email || ''}
            autoComplete='on'
            pattern={REGEX_EMAIL}
          />
          <span
            id='email-error'
            className={`form__error ${
              error.email ? 'form__error_visible' : ''
            }`}
          >
            {error.email}
          </span>
        </fieldset>
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className='form__input'
            name='password'
            type='password'
            id='password'
            required
            placeholder='Пароль'
            onChange={handleChange}
            value={values.password || ''}
            autoComplete='on'
          />
          <span
            id='password-error'
            className={`form__error ${
              error.password ? 'form__error_visible' : ''
            }`}
          >
            {error.password}
          </span>
        </fieldset>
      </FormContainer>
    </main>
  );
}

export default Login;
