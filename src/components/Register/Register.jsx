import React from 'react';
import './Register.css';
import FormContainer from '../FormContainer/FormContainer';
import useForm from '../../hooks/useForm';
import { Navigate } from 'react-router-dom';
import { REGEX_EMAIL } from '../../utils/constants';

function Register({ onRegister, loggedIn, onLoading }) {
  const { values, handleChange, error, valid } = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return loggedIn ? (
    <Navigate to='/' replace />
  ) : (
    <main className='register'>
      <FormContainer
        title='Добро пожаловать!'
        name='register'
        onSubmit={handleSubmit}
        buttonText='Зарегистрироваться'
        valid={valid}
        isDisable={!valid}
      >
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='name'>
            Имя
          </label>
          <input
            className={`form__input ${error.name ? 'form__input_error' : ''}`}
            name='name'
            type='text'
            minLength='2'
            maxLength='40'
            id='name'
            required
            placeholder='Надежда'
            onChange={handleChange}
            value={values.name || ''}
            autoComplete='on'
            disabled={onLoading ? true : false}
          />
          <span
            id='password-name'
            className={`form__error ${error.name ? 'form__error_visible' : ''}`}
          >
            {error.name || ''}
          </span>
        </fieldset>
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
            pattern={REGEX_EMAIL}
            placeholder='pochta@yandex.ru'
            onChange={handleChange}
            value={values.email || ''}
            autoComplete='on'
            disabled={onLoading ? true : false}
          />
          <span
            id='email-error'
            className={`form__error ${
              error.email ? 'form__error_visible' : ''
            }`}
          >
            {error.email || ''}
          </span>
        </fieldset>
        <fieldset className='form__fieldset'>
          <label className='form__label' htmlFor='password'>
            Пароль
          </label>
          <input
            className={`form__input ${
              error.password ? 'form__input_error' : ''
            }`}
            name='password'
            type='password'
            minLength='6'
            maxLength='100'
            id='password'
            required
            placeholder='Пароль'
            onChange={handleChange}
            value={values.password || ''}
            autoComplete='on'
            disabled={onLoading ? true : false}
          />
          <span
            id='password-error'
            className={`form__error ${
              error.password ? 'form__error_visible' : ''
            }`}
          >
            {error.password || ''}
          </span>
        </fieldset>
      </FormContainer>
    </main>
  );
}
export default Register;
