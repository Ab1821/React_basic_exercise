import React from 'react';
import Styled from 'styled-components'

const H1 = Styled.h1`
color:green;
background:grey;
padding:10px
text-align:center;
`

function StyleCompo(props) {
    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <H1>Good Morning!!</H1>
                </div>
            </div>
        </div>
    );
}

export default StyleCompo;