import React, { Component } from 'react';
import Reuse from './ReusableCompo'

class Compo extends Component {
    render() {
        return (
            <>
                <div className='container mt-5'>
                    <div className="row">
                        <div className="col-3">
                            <Reuse imgSrc='img/White.jpg' title='White T-shirt' oldPrice='5000' newPrice='4000' />
                        </div>

                        <div className="col-3">
                            <Reuse imgSrc='img/Red.jpg' title='Red T-shirt' oldPrice='4000' newPrice='3000' />
                        </div>

                        <div className="col-3">
                            <Reuse imgSrc='img/Yellow.jpg' title='Yellow T-shirt' oldPrice='5000' newPrice='4000' />
                        </div>

                        <div className="col-3">
                            <Reuse imgSrc='img/Black.jpg' title='Black T-shirt' oldPrice='5000' newPrice='4000' />
                        </div>



                        <div className="col-3 mt-5" >
                            <Reuse imgSrc='img/Yellow.jpg' title='Yellow T-shirt' oldPrice='5000' newPrice='4000' />
                        </div>

                        <div className="col-3 mt-5">
                            <Reuse imgSrc='img/Red.jpg' title='Red T-shirt' oldPrice='4000' newPrice='2775' />
                        </div>
                        <div className="col-3 mt-5">
                            <Reuse imgSrc='img/White.jpg' title='White T-shirt' oldPrice='2244' newPrice='1234' />
                        </div>

                        <div className="col-3 mt-5">
                            <Reuse imgSrc='img/Black.jpg' title='Black T-shirt' oldPrice='5300' newPrice='3330' />
                        </div>
                    </div>

                </div>


            </>
        );
    }
}

export default Compo;