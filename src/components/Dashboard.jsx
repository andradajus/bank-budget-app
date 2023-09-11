import React from 'react';

const DashBoard = (props) => {
    const { name, firstName, transHistory } = props; //check if authenticated

    return (
        <>
        <span>Hi, {firstName}</span>
        </>
    )
}

export default Dashboard; 