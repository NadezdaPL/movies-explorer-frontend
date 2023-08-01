import React from 'react';
import { isValidEmail } from '../utils/helpers';

function useForm() {
  const [values, setValues] = React.useState({});
  const [valid, setValid] = React.useState(false);
  const [error, setError] = React.useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });

    if (name === 'email' && !isValidEmail(value)) {
      event.target.setCustomValidity(
        'Необходимо указать e-mail в формате pochta@yandex.ru'
      );
    } else {
      event.target.setCustomValidity('');
    }
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: event.target.validationMessage });
    setValid(event.target.closest('form').checkValidity());
  };

  const reset = React.useCallback(
    (newValue = {}, newValid = false, newError = {}) => {
      setValues(newValue);
      setValid(newValid);
      setError(newError);
    },
    [setValues, setValid, setError]
  );

  return {
    values,
    valid,
    handleChange,
    reset,
    setValid,
    setValues,
    error,
    setError,
  };
}

export default useForm;
