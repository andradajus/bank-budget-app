import React from 'react';

const InputLabels = ({label, type, id, value, onChange}) => {
    return (
        <>
            <label>{label}</label>
            <input
                title={label}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
            />
        </>
    )
}


export default InputLabels;