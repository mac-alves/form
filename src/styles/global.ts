import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        list-style: none;
        text-decoration: none;
        outline: 0;
        font-size: 15px;
    }

    html, body, #root{
        font-size: 100%;
        color: #ccc;
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    body {
        background: #36393f;
        height: 100vh;
        transition: all 0.5s;
    } 
`;