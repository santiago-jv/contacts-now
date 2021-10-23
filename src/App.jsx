import React from 'react';
import ContextProvider from './context/ContextProvider';
import { ThemeProvider } from 'styled-components';

import { themes } from './constants';
import RouterProvider from './routes/RouterProvider';
import { GlobalStyle } from './styles/App.styles';
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css"

import { ToastContainer } from 'react-toastify';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  
  return (
    <ContextProvider>
      <ThemeProvider theme={themes[theme]}>
       
        <RouterProvider theme={theme} setTheme={setTheme}/>
        <GlobalStyle/>
        <ToastContainer theme={theme} position={"bottom-left"}/>
      </ThemeProvider>
      
    </ContextProvider>
  );
}

export default App;
