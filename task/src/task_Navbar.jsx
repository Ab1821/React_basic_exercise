import React from 'react';

import { BrowserRouter as Router, Route, Link, Routes, resolvePath } from 'react-router-dom';


function Navbar(props) {
    const MenuData = { '/home': 'Home', '/about': 'About' }
    const ResultData = Object.entries(MenuData).map((res, i) => {
        console.log(i);
        return <li classNameName="nav-item" key={i}>
            <Link classNameName="nav-link" to={res[0]}>{res[1]}</Link>
        </li>
    })
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> Tops Technologies</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Link
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        {/* <li><hr className="dropdown-divider"></li> */}
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </Router>
        </div>


    );


}