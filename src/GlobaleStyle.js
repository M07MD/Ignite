import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem
        }
        &::-webkit-scrollbar-thumb {
            background: darkgray;
            border-radius: 5px;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #333;
    }
    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1rem;
    }
    p {
        font-size: 1.1rem;
        line-height: 200%;
        color: #969696;
    }

    a {
        text-decoration: none;
        color: #333;
    }

`;

export default GlobalStyles;
