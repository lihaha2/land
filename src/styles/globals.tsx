import { createGlobalStyle } from 'styled-components'
// font-family: 'Chakra Petch', sans-serif;
// font-family: 'Poppins', sans-serif;

export const theme = {
  colors: {
    primary: '#FFFFFF',
    mainBackground: '#111C2E',
    textGray: '#4A607F',
    DX_Gradient: 'linear-gradient(90deg, #3783FF -2.73%, #23EFF9 102.11%)',
    Main_Blue: '#1FA1ED',
  },
}

export type ThemeType = typeof theme

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chakra Petch', sans-serif;
  }

  #__next{
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
  }

  html {
    scroll-behavior: smooth;
  }

  .leftPd{
    padding-left: 13.75rem;
  }

  body {
    background-color: ${theme.colors.mainBackground};
    color: ${theme.colors.primary};
    overflow-x: hidden;
  }

  button{
    background: none;
    border: none;
    outline: none;
    color: ${theme.colors.primary};
    cursor: pointer;
  }
`
