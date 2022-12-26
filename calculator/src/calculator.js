import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleButtonClick = (event) => {
        setInput(input + event.target.value);
    }

    const calculateResult = () => {
        const evaluatedResult = eval(input);
        setResult(evaluatedResult);
        setInput(evaluatedResult);
    }

    return (
        <>
            <h1>Calculator</h1>
            <div>
                <input type="text" value={input} onChange={handleChange} ></input>
                <button onClick={calculateResult}>Calculate</button>
            </div>
            <div>
                <button value='7' onClick={handleButtonClick}>7</button>
                <button value='8' onClick={handleButtonClick}>8</button>
                <button value='9' onClick={handleButtonClick}>9</button>
                <button value='+' onClick={handleButtonClick}>+</button>
            </div>
            <div>
                <button value='4' onClick={handleButtonClick}>4</button>
                <button value='5' onClick={handleButtonClick}>5</button>
                <button value='6' onClick={handleButtonClick}>6</button>
                <button value='-' onClick={handleButtonClick}>-</button>
            </div>
            <div>
                <button value='1' onClick={handleButtonClick}>1</button>
                <button value='2' onClick={handleButtonClick}>2</button>
                <button value='3' onClick={handleButtonClick}>3</button>
                <button value='*' onClick={handleButtonClick}>*</button>
            </div>
            <div>
                <button value='0' onClick={handleButtonClick}>0</button>
                <button value='.' onClick={handleButtonClick}>.</button>
                <button value='/' onClick={handleButtonClick}>/</button>
                <button value='=' onClick={calculateResult}>=</button>
            </div>
            <div>Result: {result}</div>
        </>
    )

}

export default Calculator;