import React from 'react';

const navBar = (props) => {
    const { Home, type, id } = props;

    return (
        <>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Transaction History</li>
            </ul>
        </>
    )
}

export default InputLoginForm;