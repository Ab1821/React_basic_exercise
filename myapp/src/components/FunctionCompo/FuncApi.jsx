import React, { useEffect, useState } from 'react';

function FuncApi(props) {
    const [status, setStatus] = useState('Pending')
    const [data, setData] = useState('')
    let showData = '';


    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((res) => res.json())
                .then(response => {
                    console.log(response);
                    response.map((element) => {
                        showData +=
                            `<tr>
                            <td>${element.userId}</td>
                            <td>${element.id}</td>
                            <td>${element.title}</td>
                            <td>${element.completed}</td>
                            </tr>`
                        document.querySelector("#showData").innerHTML = showData;
                    })
                    setStatus('Success')
                    setData(showData)

                })
                .catch((er) => console.log(er))
        }, 3000)
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{status}</h1>

                        <div>
                            <table className='table table-borderd' border={1}>
                                <th>userid</th>
                                <th>id</th>
                                <th>title</th>
                                <th>completed</th>
                                <tbody id="showData"></tbody>

                            </table>

                        </div>

                        {status == 'Success' ? JSON.stringify(data) : 'No Data found'}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FuncApi;