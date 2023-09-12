import React from 'react';

const InputRegistrationForm = (props) => {
    const {username, firstName, middleName, lastName, birthday, country, password} = props;
    return (
        <>
            <label>{label}</label>
            <input
                username={username}
                firstName={firstName}
                middleName={middleName}
                lastName={lastName}
                birthday={birthday}
                country={country}
                password={password}
            />
        </>
    )
}

export default InputRegistrationForm;