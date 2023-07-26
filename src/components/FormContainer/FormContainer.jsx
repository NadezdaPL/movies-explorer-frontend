import './FormContainer.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import React from 'react';

function FormContainer({
  title,
  name,
  onSubmit,
  buttonText,
  isDisable,
  valid,
  isName,
  isPassword,
  ...props
}) {
  const navigate = useNavigate();

  return (
    <section className='form-container'>
      <Link className='form-container__link' to='/'>
        <img className='form-container__logo' src={logo} alt='Лого' />
      </Link>
      <h1 className='form-container__title'>{title}</h1>
      <form
        name={`${name}`}
        id={`${name}`}
        className={`form form_${name}`}
        onSubmit={onSubmit}
      >
        {props.children}
        <button
          type='submit'
          form={`${name}`}
          disabled={isDisable ? true : false}
          className={
            isDisable
              ? `form-container__button form-container__button_disabled form-container__button_${name}_disabled`
              : `form-container__button form-container__button_${name}`
          }
        >
          {buttonText}
        </button>
      </form>
      {name === 'register' ? (
        <p className='form-container__text'>
          Уже зарегистрированы?
          <button
            type='button'
            onClick={() => navigate('/signin')}
            className='form-container__button-box'
          >
            Войти
          </button>
        </p>
      ) : (
        <p className='form-container__text'>
          Ещё не зарегистрированы?
          <button
            type='button'
            onClick={() => navigate('/signup')}
            className='form-container__button-box'
          >
            Регистрация
          </button>
        </p>
      )}
    </section>
  );
}

export default FormContainer;
