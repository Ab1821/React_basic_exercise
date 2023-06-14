import React, { useRef } from 'react';

function UseRef(props) {
    const myName = useRef('');
    const myEmail = useRef('')

    const btnClick = () => {
        console.log("Button Called");
        if (myName.current.value == '') {
            alert("Please enter value")
        }
        if (myEmail.current.value == "") {
            alert("Please enter email")
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <input type='text' className='form-control' placeholder='Name' ref={myName}></input>
                        <input type='text' className='form-control' placeholder='Email' ref={myEmail}></input>
                        <button className='btn btn-primary' onClick={btnClick}>Click Me</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseRef;