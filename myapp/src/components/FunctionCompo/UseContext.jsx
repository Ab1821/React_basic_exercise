import React, { useState } from 'react';
/*
import React from 'react';
import { useState } from 'react';
import ChangeTheme from './ChangeTheme';

export const ThemeContext = React.createContext();
const UseContext = ({ children }) => {

    const [theme, setTheme] = useState(theme.light);
    const [activeTheme, setActiveTheme] = useState("light");

    let toggleTheme = () => {
        const nextTheme = activeTheme === "light" ? "dark" : "light";
        setTheme(theme[nextTheme]);
        setActiveTheme(nextTheme);
    };
    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
            <ChangeTheme />
        </ThemeContext.Provider>
    );

}

export default UseContext;
*/
{/* { style={{ backgroundColor: data.background, color: data.forground }} } */ }
/*
const [theme, settheme] = useState({
    Dark: {
        'forground': 'red',
        'background': 'yellow'
    },
    light: {
        'forground': 'white',
        'background': 'grey'
    }

})
const initialstate = {
    dark : false,
    theme : theme.light,
    toggle: () =>{}

}

function UseContext(props) {
  const [dark,setdark ]= React.useState(false)
    // const [theme, setTheme] = useState('light');
    const mytheme = React.createContext(initialstate);
    const data = useContext(mytheme)

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <mytheme.Provider value={data == "light"}>
                        <h2>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </h2>
                        {/* <input type='checkbox'
                            onChange={(e) => {
                                settheme(e.target.theme ? 'dark' : 'light')
                            }} >Change mode</input> }
                        <button className='btn-primary' onClick={(e) => {
                            setTheme(e.data.theme = 'light' ? 'dark' : 'light')
                        }}>Click</button>



                    </mytheme.Provider>
                </div>
            </div>
        </div>

    );
}
*/



const ThemeContext = React.createContext(null);

function UseContext(props) {
    const [theme, setTheme] = useState({
        current: 'light', // Set initial value for theme.current
        Dark: {
            background: 'black',
            foreground: 'white',
        },
        light: {
            background: 'yellow',
            foreground: 'red',
        },
    });

    //   const data = useContext(ThemeContext) || {};

    const toggleTheme = () => {
        setTheme(prevTheme => ({
            ...prevTheme,
            current: prevTheme.current === 'light' ? 'Dark' : 'light',
        }));
    };

    const themeStyle = theme[theme.current];

    return (
        <ThemeContext.Provider value={theme}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2
                            style={{
                                backgroundColor: themeStyle.background || 'white',
                                color: themeStyle.foreground || 'black',
                            }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                        </h2>

                        <button onClick={toggleTheme}>Change theme</button>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default UseContext;
