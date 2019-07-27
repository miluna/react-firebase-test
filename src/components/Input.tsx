import React from 'react';

interface InputProps {
    placeholder: string,
    id: string,
    value?: string,
    type: "text" | "password" | "email",
    onChange: Function,
    label: string,
}


const Input = ({ placeholder, id, value, label, onChange, type }: InputProps) => {
    return (
        <div className="input-field">
            <input
                placeholder={label === "" ? placeholder : undefined}
                id={id}
                type={type}
                className="validate"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

Input.defaultProps = {
    placeholder: "",
    id: "textInput",
    value: undefined,
    type: "text",
    onChange: () => {},
    label: "",
};

export default Input;