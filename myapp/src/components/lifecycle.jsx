import React, { Component } from 'react';


class lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor called')
        this.state = { counter: 0, status: "Pending" }
    }

    // componentWillMount() {
    //     console.log('componentWillMoun called');

    // }

    componentDidMount() {
        setTimeout(() => {
            console.log('componentDidMount called');
            this.setState({ status: "Completed" });
        }, 2000);

    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps called');

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate called');
        console.log('nextstate', nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate called');

    // }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate called');
        console.log('prevstate', prevState)

    }

    componentWillUnmount() {
        console.log('componentWillUnmount called');

    }
    changeData = () => {
        console.log('button called');
        this.setState({ counter: this.state.counter + 1 })

    }

    render() {
        console.log(' render called');
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{this.state.counter}</h1>
                            <button className='btn btn-primary' onClick={this.changeData}>click me</button><br />
                            <h1>
                                {this.state.status}
                            </h1>


                        </div>

                    </div>

                </div>
            </div >
        );
    }
}



export default lifecycle;