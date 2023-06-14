import React, { Component } from 'react';

class Api extends Component {
    constructor() {
        super()
        this.state = { status: "Pending", fetchData: "" }
    }
    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/comments")
                .then((res) => res.json())
                .then((Resp) => {
                    // console.log(Resp)
                    Resp.forEach(element => {

                        this.fetchData +=
                            `<tr><td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.email}</td>
                        <td>${element.body}</td>
                        </tr>`

                        document.querySelector("#dispData").innerHTML = this.fetchData;

                    });
                    this.setState({ status: "Completed", fetchData: Resp });
                })
                .catch((Error) => console.log(Error));

        }, 2000);

    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>
                                {this.state.status}
                            </h1>
                            <div>
                                <table border={1}>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>body</th>
                                    <tbody id="dispData"></tbody>
                                </table>
                                {/* {this.state.status == "" ? JSON.stringify(this.state.fetchData) : "No Data Found "} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Api;