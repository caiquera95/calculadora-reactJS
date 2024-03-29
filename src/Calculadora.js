import React, {useState} from 'react';
import './style.css';

export default function Calculadora(){
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult (result.concat(e.target.name));
    }

    const clear = () => {
        setResult("");
    }

    const backspace = () => {
        setResult(result.slice(0, result.length -1));
    }

    const calcular = () => {
        try {
            setResult(eval(result).toString());
        }
        catch(err){
            setResult("Cálculo inválido")
        }
    }
 
    return(
        <>
        <h2>Calculadora em React JS</h2>

        <div className="container">
           <form>
               <input type="text" value={result} ></input>
            </form>

           <div className="keypad">
                <button onClick={clear} id="clear" className="btnSimbols">AC</button>

                <button onClick={backspace} id="backspace" className="btnSimbols">C</button>

                <button name="%" onClick={handleClick} className="btnSimbols">%</button>
                
                <button name="/" onClick={handleClick} className="btnSimbols">/</button>
                
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                
                <button name="+" onClick={handleClick} className="btnSimbols">+</button>

                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                
                <button name="-" onClick={handleClick} className="btnSimbols">-</button>
                
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                
                <button name="*" onClick={handleClick} className="btnSimbols">*</button>
                <button name="0" onClick={handleClick} className="btn0">0</button>
                
                <button name="." onClick={handleClick} className="btnSimbols">.</button>
                
                <button name="=" onClick={calcular} className="btnSimbols">=</button>
           </div>
        </div>
        </>
    )
}