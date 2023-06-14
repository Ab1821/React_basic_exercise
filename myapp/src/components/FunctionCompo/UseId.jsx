import React, { useId } from 'react';

function UseId(props) {
    const myid = useId()
    console.log(myid);
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <p id={myid} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default UseId;