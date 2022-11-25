import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

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
