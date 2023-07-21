import React from 'react';

function useForm() {
  const [values, setValues] = React.useState({});
  const [valid, setValid] = React.useState(false);
  const [error, setError] = React.useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
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
