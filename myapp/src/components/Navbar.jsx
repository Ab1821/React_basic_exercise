import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


import Home from './Home';
import About from './About';
import State from './state';
import Lifecycle from './lifecycle';
import Api from './Api';
import Compo from './Compo';
import FuncCompo from './FunctionCompo/FuncCompo';
import UseEffect from './FunctionCompo/UseEffect';
import Loader from './FunctionCompo/Loader';
import FuncApi from './FunctionCompo/FuncApi';
import UseReducer from './FunctionCompo/UseReducer';
import UseRef from './FunctionCompo/UseRef';
import UseContext from './FunctionCompo/UseContext';
import StyleCompo from './FunctionCompo/StyleCompo';
import UseMemo from './FunctionCompo/UseMemo';
import UseId from './FunctionCompo/UseId';

function Navbar(props) {

    const [load, setload] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setload(false)

        }, 0);
    })



    const MenuData = {
        '/home': 'Home', '/about': 'About', '/state': 'State',
        '/lifecycle': 'Lifecycle', '/api': 'Api', '/compo': 'Compo',
        '/funcCompo': 'FuncCompo', '/useEffect': 'UseEffect',
        '/Loader': 'Loader', '/funcApi': 'FuncApi', '/useReducer': 'UseReducer',
        '/useref': 'UseRef', '/usecontext': 'UseContext', '/stylecompo': 'StyleCompo',
        '/usememo': 'UseMemo', '/useid': 'UseId'
    }
    const ResultData = Object.entries(MenuData).map((res, i) => {
        // console.log(i);
        return <li className="nav-item" key={i}>
            <Link className="nav-link" to={res[0]}>{res[1]}</Link>
        </li>
    })

    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Tops Technologies</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">

                                {ResultData}

                            </ul>
                        </div>
                    </div>
                </nav><Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/state" element={<State />} />
                    <Route path="/lifecycle" element={<Lifecycle />} />
                    <Route path="/Api" element={<Api />} />
                    <Route path="/Compo" element={<Compo />} />
                    <Route path="/FuncCompo" element={<FuncCompo />} />
                    <Route path="/useEffect" element={<UseEffect />} />
                    <Route path="/loader" element={<Loader />} />
                    <Route path="/funcApi" element={<FuncApi />} />
                    <Route path="/useReducer" element={<UseReducer />} />
                    <Route path="/useref" element={<UseRef />} />
                    <Route path="/usecontext" element={<UseContext />} />
                    <Route path="/stylecompo" element={<StyleCompo />} />
                    <Route path="/usememo" element={<UseMemo />} />
                    <Route path="/useid" element={<UseId />} />




                </Routes>
            </Router>

        </div>
    );
}

export default Navbar;