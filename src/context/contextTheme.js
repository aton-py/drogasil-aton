import React, {useState, createContext, useContext } from 'react';
import { ThemeProvider as Theme } from 'styled-components';
import { light, dark } from './Theme'

const Context = createContext({
    handleThemeChange: () => { },
});

export const ThemeProvider = ({ children }) => {
    const[isWhiteTheme, setIsWhiteTheme] = useState({})

    function handleThemeChange() {
        return setIsWhiteTheme
        (!isWhiteTheme)
    }

    return (
        <Context.Provider value={{handleThemeChange}} >
            <Theme theme={!isWhiteTheme ? dark : light}>
                { children }
            </Theme>
        </Context.Provider>
    )
}

export default function useTheme() {
    const context = useContext(Context)
    return context
}