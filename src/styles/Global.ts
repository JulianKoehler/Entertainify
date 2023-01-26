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
        font-size: 3.2rem;
        line-height: 4rem;
        letter-spacing: -0.05rem;
    }

    h2 {
        font-weight: 300;
        font-size: 2.4rem;
        line-height: 3rem;
    }

    h3 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 3rem;
    }

    h4 {
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.3rem;
    }

    p, span {
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 1.9rem;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    #root {
        display: flex;
        max-width: 100%;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px var(--semi-dark-blue) inset !important;
        -webkit-text-fill-color: white !important;
        box-shadow: 0 0 0 1000px var(--semi-dark-blue) inset !important;
    }
`;

export default GlobalStyles;
