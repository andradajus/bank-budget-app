import React from 'react';
import InputLoginForm from "./InputLoginForm";

const LoginForm = () => {
    return (
        <form>
            <InputLoginForm
                type="text"
                label="Username"
                id="username"
            />
            <InputLoginForm   
                type="password"
                label="Password"
                id="password"
            />
                
            <button type="button">Submit</button> {/* {if successful, authenticated} */}
            <button type="button">Forgot Password</button>
            <button type="button">Register</button>
        </form>
    );
}

export default LoginForm;