import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../../components/api/register'
import { useForm } from "react-hook-form";

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const RegisterForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();


const submitHandle = data => {
    registerUser({'username': data.username, 'password': data.password}).then(res => {
       if(!res.message){
        history.push('./Login');
        }
    })
}


    const registerForm = 
        <Form onSubmit={handleSubmit(submitHandle)}> 
            <FormRow>
                <FormAdditionalLink to="./login">Already registered? Click here to login!</FormAdditionalLink>
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="username">Username</FormLabel>
                <FormInput
                    type="text"
                    id="username"
                    name="username"
                    
                    ref={register({
                        required: {
                            value: true,                            
                        },
                        minLength: {
                            value: 5,
                            message: "Username should be at least 5 characters long!"
                        }
                    })} />
                { errors.username && <FormInputValidation> { errors.username.message } </FormInputValidation>}
                { errors.username && errors.username.type === "required"  && <FormInputValidation> Username is required </FormInputValidation> }
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                   
                    ref={register({
                        required: {
                            value: true,                            
                        },
                        minLength: {
                            value: 8,
                            message: "Password should be at least 8 characters long!"
                        }
                    })} />
                { errors.password && <FormInputValidation> { errors.password.message } </FormInputValidation>}
                { errors.password && errors.password.type === "required"  && <FormInputValidation> Password is required </FormInputValidation> }
            </FormRow>
            <FormButtonRow>
                <FormButton>Register</FormButton>
            </FormButtonRow>
        </Form>;

    return (
        <>
            {registerForm}
        </>
    );
}

export default RegisterForm;