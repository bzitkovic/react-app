import React, { useState } from 'react';
// If the component that needs to acces router props is not direct child
// of the Route component, then you need to import and define useHistory.
// After that you can access history so you can programatically go to the
// desired route.
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../../components/api/login'
import { useForm } from "react-hook-form";
import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormSubmitSuccess,
    FormInputValidation,
    FormButton,
} from '../FormStyles';

const LoginForm = (props) => {

    const { register, handleSubmit, errors } = useForm();

    const history = useHistory();
    const [error, setError] = useState('');


    const submitHandle = async data => {
        try {
            const res = await loginUser({'username': data.username, 'password': data.password}); 

            if(res.token){
                localStorage.setItem('token', `Bearer ${res.token}`)
                history.push('/');
            }
            else {
                setError('Username or password are incorrect!');
            }
        } catch(error){
            setError(error);
        }  
    }

    const loginForm = <Form onSubmit={handleSubmit(submitHandle)}>
            <FormRow>
                <FormAdditionalLink to="./Registration">You don't have an account? Click here to register!</FormAdditionalLink>
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
                            message: "Username is required!"                           
                        }
                    })} />
                 { errors.username && <FormInputValidation> { errors.username.message } </FormInputValidation>  }
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
                            message: "Password is required!"
                        }
                    })} />
                    { errors.password && <FormInputValidation> { errors.password.message } </FormInputValidation>  }
            </FormRow>
            <FormButtonRow>
                <FormButton>Login</FormButton>
            </FormButtonRow>
            <FormGeneralError> { error } </FormGeneralError>
        </Form>;
    return (
        <>
            {loginForm}
        </>
    );
}

export default LoginForm;