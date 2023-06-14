import React from 'react';
// import {
//     MDBNavbar,
//     MDBContainer,
//     MDBBreadcrumb,
//     MDBBreadcrumbItem
// } from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function App() {
    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <nav aria-label='breadcrumb'>
                    <MDBBreadcrumb>
                        <MDBBreadcrumbItem>
                            <link href='#'>Home</link>
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem>
                            <link href='#'>Library</link>
                        </MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active aria-current='page'>
                            <link href='#'>Data</link>
                        </MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                </nav>
            </MDBContainer>
        </MDBNavbar>
    );
}
// export default temp;