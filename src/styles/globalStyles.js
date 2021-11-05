import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    --color-primary: #CAE471;
    --color-green-400: #67A147;
    --color-primary-dark: #35542F;
    --color-light: #EDF2B0;
    --color-blue-light: #D3E6E9;
    --color-white: #FFFFF;
    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Gotham', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-primary)
  }
`;

export default GlobalStyle;
