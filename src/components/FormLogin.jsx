import React from 'react';
import InputLabels from "./InputLabels.jsx";
import RegistrationForm from "./FormRegistration.jsx"

const LoginForm = () => {
    const goToRegistrationPage = () => {   setCurrentPage('registration');
}
    return (
        <form>
            <InputLabels
                type="text"
                label="Username"
                id="username"
            />
            <InputLabels  
                type="password"
                label="Password"
                id="password"
            />
                
            <button type="button">Submit</button> {/* {if successful, authenticated} */}
            <button type="button">Forgot Password</button>
            <button onClick={goToRegistrationPage}>Register</button>
        </form>
    );
}

export default LoginForm;