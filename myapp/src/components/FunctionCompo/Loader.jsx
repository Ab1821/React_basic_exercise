import React, { useEffect, useState } from 'react';
// import ReusableCompo from '../ReusableCompo';
// import FuncCompo from './FuncCompo';
import Compo from '../Compo';

function Loader(props) {
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloading(false)

        },);
    })
    return (
        <>
            {loading ?

                <div className='d-flex justify-content-center align-item-center' style={{ marginTop: 230 }}>
                    <span className="visually ">Loading...</span><br />
                    <div className="spinner-border text-primary " style={{ marginLeft: 10 }} role="status">
                        {/* <span class="visually-hidden">Loading...</span> */}
                    </div>
                    <div className="spinner-border text-secondary" role="status">
                        {/* <span class="visually-hidden">Loading...</span> */}
                    </div>
                    <div className="spinner-border text-success" role="status">
                        {/* <span class="visually-hidden">Loading...</span> */}
                    </div>
                    <div className="spinner-border text-danger" role="status">
                        {/* <span class="visually-hidden">Loading...</span> */}
                    </div>
                </div>
                :
                <>
                    <Compo />

                </>
            }
        </>
    )
}

export default Loader;