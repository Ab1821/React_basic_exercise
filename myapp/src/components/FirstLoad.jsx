import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function FirstLoad(props) {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);

        }, 3000);
    })


    return (
        <>
            {load ?
                <div className='load d-flex justify-content-center align-item-center ' style={{ marginTop: 250 }}>
                    <span clasName="visually">Loading...</span><br />
                    <div className="spinner-border text-primary " style={{ marginLeft: 20 }} role="status">
                        {/* <span className="visually-hidden">Loading...</span> */}
                    </div>
                    <div className="spinner-border text-secondary" role="status">
                        {/* <span className="visually-hidden">Loading...</span> */}
                    </div>
                    <div className="spinner-border text-success" role="status">
                        {/* <span className="visually-hidden">Loading...</span> */}
                    </div>
                    <div className="spinner-border text-danger" role="status">
                    </div>


                </div>
                :

                <>
                    <Navbar />
                </>
            }
        </>
    );
}

export default FirstLoad;