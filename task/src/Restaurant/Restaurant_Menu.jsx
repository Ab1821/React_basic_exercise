import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Restaurant1 from './Restaurant1';
import Restaurant2 from './Restaurant2';
import Restaurant3 from './Restaurant3';
import TimerReducer from './Time_Reducer';

function Restaurant_Menu(props) {
    const restaurants = {
        '/restaurant1': 'Restaurant 1',
        '/restaurant2': 'Restaurant 2',
        '/restaurant3': 'Restaurant 3',
        '/timereducer': 'TimerReducer'
    }

    const RestData = Object.entries(restaurants).map((res, i) => {
        return <li className="nav-item" key={i}>
            <Link className="nav-link" to={res[0]}>{res[1]}</Link>
        </li>

    })
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> Good Dine 🍕</a>
                        <span className="navbar-toggler-icon"></span>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">

                                {RestData}

                            </ul>
                        </div>
                    </div>
                </nav><Routes>
                    <Route path="/restaurant1" element={<Restaurant1 />} />
                    <Route path="/restaurant2" element={<Restaurant2 />} />
                    <Route path="/restaurant3" element={<Restaurant3 />} />
                    <Route path="/timereducer" element={<TimerReducer />} />

                </Routes>
            </Router>


        </div>
    );
}

export default Restaurant_Menu;