import React from "react";

const Input = ({
    label,
    id,
    placeHolder,
    type,
    onChange,
    onBlur,
    value,
    error,
    errorMessage
}) => {
    return (
        <div className="my-6">
            <label htmlFor={id}>{label}
            <input 
                type={type} 
                onBlur={onBlur} 
                onChange={onChange} 
                id={id}
                name={id}
                value={value}
                placeholder={placeHolder}
                className="form-input" />
            </label>
            {error && 
                <span className="text-red-500 text-sm">{errorMessage}</span>
            }
        </div>
    )
}

export default Input