import React from 'react';

const InputLoginForm = (props) => {
    const { label, type, id } = props;

    return (
        <>
            <label>{label}</label>
            <input
                title={label}
                type={type}
                id={id}
            />
        </>
    )
}

export default InputLoginForm;