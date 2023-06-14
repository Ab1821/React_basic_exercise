import React, { useMemo, useState } from 'react';

function UseMemo(props) {
    const [count, setCount] = useState(0)

    const btnclck = () => {
        setCount((c) => c + 1)
    }
    const inc = useMemo(() => Increment(count));
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>{count}</h1>
                        <button className='btn btn-primary' onClick={btnclck}>click</button>
                    </div>
                </div>
            </div>
        </>
    );
}
const Increment = (mycount) => {
    for (let i = 0; i <= 500; i++) {
        mycount += 1;
    }
}


export default UseMemo;