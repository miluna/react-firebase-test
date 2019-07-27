import React from 'react';


interface ButtonProps {
    name: string,
    onClick: Function,
    size: "regular" | "large",
    disabled?: boolean,
}

const Button = ({name, onClick, size, disabled}: ButtonProps) => {
    let sizeClass;
    switch (size) {
        case "regular":
            sizeClass = "btn";
            break;
        case "large":
            sizeClass = "btn-large";
            break;
        default:
            sizeClass = "btn";
            break;
    }

    return (
        <a
            className={`waves-effect waves-light ${sizeClass}${disabled ? " disabled" : ""}`}
            onClick={() => onClick()}
        >
            {name}
        </a>
    );
};

Button.defaultProps = {
    name: "button",
    onClick: () => {},
    size: "regular",
    disabled: false,
};

export default Button;
