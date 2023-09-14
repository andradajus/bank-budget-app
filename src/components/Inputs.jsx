import React from 'react';

const InputLabels = ({label, type, id}) => {
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


export default InputLabels;