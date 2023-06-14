import React, { useEffect, useState } from 'react';

function UseEffect(props) {
    const [data, setdata] = useState('good morning!')
    const [counter, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect Called");
        setTimeout(() => {
            setdata("Welcome to ReactJs Class");
        }, 3000)
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{data}</h1>
                        <h1>{counter}</h1>
                        <button className='btn btn-primary' onClick={() => setCount(counter + 1)}>Click</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseEffect;