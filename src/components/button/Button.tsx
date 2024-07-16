import React from "react";
import "./Button.css";

interface ButtonTypes {
    value: string,
    handleClick(value?: string): void
};

const Button = ({ value, handleClick }: ButtonTypes) => {
    return (
        <div
            className="button__wrapper"
            onClick={() => handleClick(value)}
        >{value}</div>
    );
};

export default Button;
