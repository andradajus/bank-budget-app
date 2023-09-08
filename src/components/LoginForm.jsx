import React from 'react';
import InputLoginForm from "./InputLoginForm";

const LoginForm = () => {
    return (
        <form>
            <InputLoginForm
                type="text"
                label="Username"
            />
            <InputLoginForm
                type="password"
                label="Password"
            />

            <button type="button">Submit</button>
            <button type="button">Forgot Password</button>
            <button type="button">Register</button>
        </form>
    );
}

export default LoginForm;