import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.bgPrimaryColor };
    transition: background .5s ease;
    
  }
  
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
`

export {GlobalStyle}