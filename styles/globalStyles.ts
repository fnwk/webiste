import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: red;
    }
`;

export default globalStyles;