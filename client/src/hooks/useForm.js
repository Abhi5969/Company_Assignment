import { useEffect, useState } from 'react';
import getStructuredZodError from '../utils/zodError';

const useForm = ({ initialValues, onSubmit, onReset, validationSchema }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setValues(initialValues);
  }, []);

  function handleChange(e) {
    setValues((v) => {
      return {
        ...v,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      // const validValues = validationSchema.parse(values);
      onSubmit(values);
    } catch (e) {
      setErrors(getStructuredZodError(e));
    }
  }

  function handleReset(e) {
    e.preventDefault();
    setValues(initialValues);
    if (onReset) onReset();
  }

  function handleBlur() {
    try {
      const validValues = validationSchema.parse(values);
    } catch (e) {
      setErrors(getStructuredZodError(e));
    }
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
    handleBlur,
  };
};

export default useForm;
