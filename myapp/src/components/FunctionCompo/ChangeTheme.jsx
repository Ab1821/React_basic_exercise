import React, { useContext } from 'react';
import ThemeContext from './UseContext';


const ChangeTheme = () => {
    const theme = useContext(ThemeContext);
    console.log('theme', theme);
    return (
        <>

            <h2> Hello Abhishek</h2>
            <button onClick={toggleTheme}>Toggle theme</button>
        </>
    );
}

export default ChangeTheme;