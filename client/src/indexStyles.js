import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --font-title: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        --font-text: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;

        // COLOR PALETTE

        --cl-primary: #3f51b5;
        --cl-secondary: #9003bb;

        --cl-font: #393939;
        --cl-white: #ffffff;
        --cl-grey: #8a8a8a;
        --cl-bg: #f9f9f3;
        --cl-shadow: rgba(0, 0, 0, 0.404);

        // SCROLL
        --cl-scroll-bg: #fff;
        --cl-scroll-shadow: rgba(0, 0, 0, 0.486);
    }

    // UNIVERSAL

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    // BASE

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        // 100 / 16 * 10 = 62.5%

        @media only screen and (max-width: 48em) {
            font-size: 56.25%;
            // 100 / 16 * 9 = 56.25%
        }

        @media only screen and (max-width: 26.563em) {
            font-size: 50%;
            // 100 / 16 * 8 = 50%
        }
    }

    body {
        font-family: var(--font-text);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6;
        color: var(--cl-font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::-webkit-scrollbar {
            width: 0.8rem;
            background-color: var(--cl-scroll-bg);
        }
        &::-webkit-scrollbar-thumb {
            background-image: linear-gradient(
            to bottom,
            var(--cl-primary),
            var(--cl-secondary)
            );
            border-radius: 5rem;
        }
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
            box-shadow: inset 0 0 6px var(--cl-scroll-shadow);
        }
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    // SELECTION
    ::selection {
        // background-color: var(--cl-primary);
        background-color: var(--cl-primary);
        color: var(--cl-white);
    }

    // REMOVE SAFARI ZOOM
    select,
    textarea,
    input[type="text"],
    input[type="password"],
    input[type="datetime"],
    input[type="datetime-local"],
    input[type="date"],
    input[type="month"],
    input[type="time"],
    input[type="week"],
    input[type="number"],
    input[type="email"],
    input[type="url"],
    input[type="search"],
    input[type="tel"],
    input[type="color"] {
        font-size: 16px !important;
    }

    .MuiBottomNavigationAction-label {
        font-size: 16px !important;
    }

    .MuiBottomNavigationAction-wrapper {
        grid-area: 1/1/2/2;
        display: grid !important;

        & svg {
            grid-area: 1/1/2/2;
        }

        & span {
            grid-area: 1/1/2/2;
        }
    }
`;
