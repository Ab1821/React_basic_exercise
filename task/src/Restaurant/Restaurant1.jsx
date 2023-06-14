// import React from 'react';


// function Restaurant1(props) {
//     let menu1 = ['Pizza', 'Pasta', 'Burrito', 'Upma']



//     return (
//         <div>
//             <div className="d-flex justify-content-evenly mt-5">
//                 <button className='btn btn-primary' onClick={() => {
//                     console.log(...menu1);
//                     menu1.map((item, i) => <ul><div key={i}>{item} </div></ul>)
//                 }}> Breakfast </button>
//                 <button className='btn btn-secondary'> Lunch </button>
//                 <button className='btn btn-success'> Dinner </button>
//                 <br />                       <br />
//                 {/* <h3>{menu1}</h3> */}

//             </div>
//         </div>
//     );
// }

// export default Restaurant1;

/*
import React from 'react';

function Restaurant1(props) {
    let menu1 = ['Pizza', 'Pasta', 'Burrito', 'Upma']

    const breakfast = () => {
        const renderList = menu1.map((menu1) => <li>{menu1}</li>)
        return <ul>{renderList}</ul>
    }

    return (
        <div className="d-flex justify-content-evenly mt-5">
            <button className='btn btn-primary' onClick={breakfast}> Breakfast</button>
            <button className='btn btn-secondary'> Lunch </button>
            <button className='btn btn-success'> Dinner </button>

            <div className="row">
                <div className="col">


                </div>
            </div>
        </div>




    );
}

export default Restaurant1;

*/

// import React from 'react';


import React, { useState } from 'react';

function Restaurant1(props) {
    const [data, setData] = useState('Welcome, What would you like to have ?')

    // let menu1 = [{ id: 1, item: 'Pizza' },
    // { id: 2, item: 'Pasta' },
    // { id: 3, item: 'Burrito' },
    // { id: 4, item: 'Upma' }];

    let menu1 = ['Pizza', 'Pasta', 'Burrito', 'Upma']

    const breakfast = () => {

        setData(menu1.map((item) => {
            console.log(item);
            return (
                <li>{item}</li>
            )

        }))
    }

    return (
        <>

            <div className="d-flex justify-content-evenly mt-5">
                <button className='btn btn-primary' onClick={breakfast}> Breakfast</button>
                <button className='btn btn-secondary'> Lunch </button>
                <button className='btn btn-success'> Dinner </button>

            </div>
            <div className="row mt-5 s-20">

                <ul>{data}</ul>

            </div>

        </>
    );
}

export default Restaurant1;

