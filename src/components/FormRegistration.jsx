import React from 'react';
import InputRegistrationForm from './InputRegistrationForm'

const RegistrationForm = () => {
    return (
        <form>

            <InputRegistrationForm
                type="text"
                label="Username" //required 
                id="username"
            />

            <InputRegistrationForm
                type="text"
                label="First Name" //required
                id="firstName"
            />

            <InputRegistrationForm
                type="text"
                label="Middle Name" //optional
                id="middleName"
            />

            <InputRegistrationForm
                type="text"
                label="Last Name" //required
                id="lastName"
            />

            <InputRegistrationForm
                type="text"
                label="Dito yung birthday" //dropdown
                id="birthday"
            />

            <InputRegistrationForm
                type="text"
                label="Dito yung country" //dropdown
                id="country"
            />

            <InputRegistrationForm
                type="password"
                label="Password"
                id="password"
            />

            <InputRegistrationForm
                type="password"
                label="Confirm Password" //check password if the same
                id="password"  
            />
          


            <button type="button">Submit</button>
            <button type="button">Back</button>
        </form>
    );
}

export default RegistrationForm;