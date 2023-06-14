import React, { Component } from 'react';

class state extends Component {
    constructor() {
        super()
        this.state = { name: "Good Morning!", age: 12 };
    }
    changeData = () => {
        console.log("changedData called");
        this.setState({ name: "Welcome to ReactJs class" })
    }


    render() {
        return (
            <div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col'>
                            <h1>{this.state.name}</h1>
                            <button className='btn btn-primary' onClick={this.changeData}>Click me to change</button>
                            <h1> {this.state.age}</h1>
                            <button className='btn btn-success' onClick={() => this.setState({ age: 17 })}>click me to chnage age</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default state;