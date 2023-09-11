import React from 'react';

const dashBoard = (props) => {
    const { name, lastname, transHistory } = props;

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