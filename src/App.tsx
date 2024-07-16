import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import * as math from "mathjs";


const App: React.FC = () => {
    const [equation, setEquation] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const calculateResult = (): void => {
        setResult(math.evaluate(equation));
    };

    const addEquation = (value: string): void => {
        setEquation(`${equation} ${value}`);
    };

    const resetInput = (): void => {
        setResult("");
        setEquation("");
    };

    return (
        <div className="calculator">
            <div className="calculator__wrapper">
                <Input equation={equation} result={result}/>
                <div className="row">
                    <Button value="C" handleClick={resetInput}/>
                    <Button value="SQR" handleClick={addEquation}/>
                    <Button value="%" handleClick={addEquation}/>
                    <Button value="/" handleClick={addEquation}/>
                </div>
                <div className="row">
                    <Button value="7" handleClick={addEquation}/>
                    <Button value="8" handleClick={addEquation}/>
                    <Button value="9" handleClick={addEquation}/>
                    <Button value="*" handleClick={addEquation}/>
                </div>
                <div className="row">
                    <Button value="4" handleClick={addEquation}/>
                    <Button value="5" handleClick={addEquation}/>
                    <Button value="6" handleClick={addEquation}/>
                    <Button value="-" handleClick={addEquation}/>
                </div>
                <div className="row">
                    <Button value="1" handleClick={addEquation}/>
                    <Button value="2" handleClick={addEquation}/>
                    <Button value="3" handleClick={addEquation}/>
                    <Button value="+" handleClick={addEquation}/>
                </div>
                <div className="row">
                    <Button value="00" handleClick={addEquation}/>
                    <Button value="0" handleClick={addEquation}/>
                    <Button value="." handleClick={addEquation}/>
                    <Button value="=" handleClick={calculateResult}/>
                </div>
            </div>
        </div>
    );
};

export default App;
