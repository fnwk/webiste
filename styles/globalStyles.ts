import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(180deg, #0F0F0F 0%, #09032D 100%);
        width: 100vw;
        height: 100vh;
    }
`;

export default globalStyles;
