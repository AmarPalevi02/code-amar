import React from 'react'

import { MdDarkMode } from 'react-icons/md'
import { CiLight } from "react-icons/ci";

import { useTheme } from '../../contexts/ThemeProvider'

const TogleTheme = () => {
   const { theme, toggleTheme } = useTheme()
   return (
      <button onClick={toggleTheme}>
         {theme === 'light' ? (
            <CiLight />
         ) : (
            <MdDarkMode />
         )}
      </button>
   )
}

export default TogleTheme