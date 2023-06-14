import React, { Component } from 'react';


class ReusableCompo extends Component {
    render() {
        return (
            <>
                <div className='card'>
                    <img src={this.props.imgSrc} alt='white' />
                    <div className='card-body text-center '>
                        <h3>{this.props.title}</h3>
                        <div className='d-flex'>
                            <span>Old Price: $<del>{this.props.oldPrice}</del></span>
                            <span className='ms-1'>New Price: ${this.props.newPrice} </span>
                        </div>
                        <button className='btn btn-primary mt-2'>Buy Now </button>
                    </div>
                </div>
            </>
        );
    }
}

export default ReusableCompo;