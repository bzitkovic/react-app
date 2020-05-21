import React from 'react';

import RegisterForm from '../components/Form/RegisterForm/RegisterForm';
import RegisterTitle from '../components/EventsTitle/EventsTitle';

const Register = () => {  

    return (
       <>
        <RegisterTitle>Registracija</RegisterTitle>
        <RegisterForm />
       </>
    );
}

export default Register;