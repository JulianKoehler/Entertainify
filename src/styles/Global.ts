import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        font-size: 62.5%;

        /* Color Boilerplate */
        --white: #ffffff;
        --red: #fc4747;
        --dark-blue: #10141e;
        --greyish-blue: #5A698F;
        --semi-dark-blue: #161d2f;
        --active-nav-link: #5A698F;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        background-color: var(--dark-blue);
        color: var(--white);
        font-family: 'Outfit', sans-serif;
    }

    h1, 
    h2, 
    h3, 
    h4, 
    h5, 
    h6, 
    p {
        margin: 0;
    }

    h1 {
        font-weight: 300;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.5px;
    }

    h2 {
        font-weight: 300;
        font-size: 24px;
        line-height: 30px;
    }

    h3 {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
    }

    h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 23px;
    }

    p, span {
        font-weight: 300;
        font-size: 15px;
        line-height: 19px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    #root {
        display: flex;
    }
`;

export default GlobalStyles;
