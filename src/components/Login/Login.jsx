import React from 'react';
import './Login.css';
import logo from '../../images/mainLogo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='login'>
      <Link className='login__link' to='/'>
        <img className='login__logo' src={logo} alt='Лого' />
      </Link>
      <h2 className='login__title'>Рады видеть!</h2>
      <form className='login__form'>
        <fieldset className='login__form_fieldset'>
          <label className='login__form_label'>E-mail</label>
          <input
            className='login__form_input'
            name='email'
            type='email'
            minLength='2'
            maxLength='40'
            id='email'
            required
            placeholder='pochta@yandex.ru'
          />
          <hr className='login__line' />
        </fieldset>
        <fieldset className='login__form_fieldset'>
          <label className='login__form_label'>Пароль</label>
          <input
            className='login__form_input'
            name='password'
            type='password'
            minLength='6'
            maxLength='100'
            id='password'
            required
            placeholder='Пароль'
          />
          <hr className='login__line' />
        </fieldset>
      </form>
      <button type='submit' className='login__button'>
        Войти
      </button>
      <div className='login__box'>
        <p className='login__box_text'>
          Ещё не зарегистрированы?
          <Link to='/signup' className='login__box_link'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
