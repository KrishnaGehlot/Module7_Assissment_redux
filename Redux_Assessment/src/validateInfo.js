// src/validateInfo.js
export default function validateInfo(values) {
    let errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    else{
        values.email=" ";
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    else{
        values.password=" ";
    }

    // if (!values.retypePassword) {
    //     errors.retypePassword = 'Retype Password is required';
    // } else if (values.retypePassword !== values.password) {
    //     errors.retypePassword = 'Passwords do not match';
    // }

    // if (!values.firstName.trim()) {
    //     errors.firstName = 'First Name is required';
    // }
   

      if (!values.firstName?.trim()) {
        errors.firstName = 'First Name is required';
    }
    else{
        values.firstName=" ";
    }
    
    if (!values.lastName?.trim()) {
        errors.lastName = 'lastName is required';
    }
    else{
        values.lastName=" ";
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Phone Number is invalid';
    }
    else{
        values.phoneNumber=" ";
    }

    console.log(values.address);
    if (!values.address.trim()) {
        errors.address = 'Address is required';
    }
    else{
        values.address=" ";
    }
    

    if (!values.region.trim()) {
        errors.region = 'Region is required';
    }
    else{
        values.region=" ";
    }
    

    if (!values.postcode.trim()) {
        errors.postcode = 'Postcode is required';
    }
    else{
        values.postcode=" ";
    }

    return errors;
}
