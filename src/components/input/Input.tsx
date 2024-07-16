import React from "react";
import "./Input.css";

interface InputTypes {
    equation: string,
    result: string
};

const Input = ({ equation, result }: InputTypes) => {
    return (
        <div className="input__wrapper">
            <div className="input-equation">
                <h3>{ equation }</h3>
            </div>
            <div className="input-result">
                <h1>{ result }</h1>
            </div>
        </div>
    );
};

export default Input;
