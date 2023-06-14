import React, { useState } from 'react';

function FuncCompo(props) {
    const [name, setName] = useState("React")
    const [counter, setCount] = useState(0);

    const btnclick = () => {
        setName("React Js")

    }
    const btnDec = () => {
        setCount(counter - 1)
        console.log(`You have clicked ${Math.abs(counter)} times`);
    }

    const btnInc = () => {
        setCount(counter + 1)
        console.log(`You have clicked ${Math.abs(counter)} times`);
    }
    const btnReset = () => {
        setCount(0)
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{name}</h1>
                        <button className='btn btn-primary ' onClick={btnclick}>Click Me </button>
                        <br />          <br />                <br />

                        <button className='btn btn-success' onClick={btnDec}>Decrement</button>
                        <h1>{counter}</h1>
                        <button className='btn btn-success' onClick={btnInc}>Increment</button>
                        <br />               <br />            <br />
                        <button className='btn btn-dark' onClick={btnReset}>reset</button>

                    </div>
                </div>
            </div>
        </>
    );
}

export default FuncCompo;