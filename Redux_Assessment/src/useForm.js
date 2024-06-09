// src/useForm.js
import { useState } from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        retypePassword: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        town: '',
        region: '',
        postcode: '',
        country: 'United Kingdom',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values.address);
        const validationErrors = validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted successfully', values);
        }
    };
    // this is use error all the contr
    return {
        values,
        errors,
        handleChange,
        handleSubmit
    };
};

export default useForm;
