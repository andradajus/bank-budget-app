import React from 'react';
import React from './InputRegistrationForm'

const RegistrationForm = () => {
    return (
        <form>

            <InputRegistrationForm
                type="text"
                label="Username"
                id="username"
            />

            <InputRegistrationForm
                type="text"
                label="First Name"
                id="username"
            />

            <InputRegistrationForm
                type="text"
                label="Middle Name"
                id="username"
            />

            <InputRegistrationForm
                type="text"
                label="Username"
                id="username"
            />

            <InputRegistrationForm
                type="text"
                label="Username"
                id="username"
            />
            <InputRegistrationForm
                type="password"
                label="Password"
                id="password"
            />

            <InputRegistrationForm
                type="password"
                label="Confirm Password"
                id="password"
                
                
            />
          


            <button type="button">Submit</button>
            <button type="button">Forgot Password</button>
            <button type="button">Register</button>
        </form>
    );
}

export default RegistrationForm;