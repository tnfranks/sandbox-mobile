import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-weight: 300;
        line-height: 1.6;
        font-size: 1.6rem;
    }
`