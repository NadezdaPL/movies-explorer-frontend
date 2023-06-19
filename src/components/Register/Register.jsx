import React from 'react';
import './Register.css';
import logo from '../../images/mainLogo.svg';
import { Link } from 'react-router-dom';

function Register() {
  // useState для проверки ошибки и линии
  const [isActiveError, setIsActiveError] = React.useState(true);
  const [isActiveLine, setIsActiveLine] = React.useState(true);

  console.log(setIsActiveError);
  console.log(setIsActiveLine);

  return (
    <section className='register'>
      <Link className='register__link' to='/'>
        <img className='register__logo' src={logo} alt='Лого' />
      </Link>
      <h2 className='register__title'>Добро пожаловать!</h2>
      <form className='register__form'>
        <fieldset className='register__form_fieldset'>
          <label className='register__form_label'>Имя</label>
          <input
            className='register__form_input'
            name='name'
            type='text'
            minLength='2'
            maxLength='40'
            id='name'
            required
            placeholder='Надежда'
          />
          <hr className='register__line' />
        </fieldset>
        <fieldset className='register__form_fieldset'>
          <label className='register__form_label'>E-mail</label>
          <input
            className='register__form_input'
            name='email'
            type='email'
            minLength='2'
            maxLength='40'
            id='email'
            required
            placeholder='pochta@yandex.ru'
          />
          <hr
            className={`register__line ${
              isActiveLine ? 'register__line_active' : ''
            } `}
          />
        </fieldset>
        <fieldset className='register__form_fieldset'>
          <label className='register__form_label'>Пароль</label>
          <input
            className='register__form_input_error'
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
            className={`register__error ${
              isActiveError ? 'register__error_visible' : ''
            } `}
          >
            Что-то пошло не так...
          </span>
          <hr className='register__line' />
        </fieldset>
      </form>
      <button type='submit' className='register__button'>
        Зарегистрироваться
      </button>
      <div className='register__box'>
        <p className='register__box_text'>
          Уже зарегистрированы?
          <Link to='/signin' className='register__box_link'>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}
export default Register;
