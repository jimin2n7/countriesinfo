import React, {createContext, useState } from 'react'

export const ThemeContext = createContext()
function ThemeProvider({children}) {
    const [theme, setTheme] = useState('lightTheme');
    const [loading, setLoading] = useState(true)

    const toggleTheme = () =>{
        setTheme(theme === 'darkTheme'?'lightTheme':'darkTheme')
    }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, loading, setLoading}}>
     {children}   
    </ThemeContext.Provider>
  )
}

export default ThemeProvider