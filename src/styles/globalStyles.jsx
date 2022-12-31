import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

${reset}

*{
    box-sizing: border-box;
}

a {
    color: inherit;
    text-decoration: none;
}

input, button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: var(--font);
    padding: 0;
    margin: 0;
    cursor: pointer;
}

textarea {
  font-family: var(--font);
  padding: 0;
  margin: 0;
}

::placeholder {
  font-family: var(--font);
}

label {
  color: var(--super-gray);
}

ol, ul, li {
    list-style: none;
}

img{
    display: block;
}

:root {
    --font: 'Pretendard';
    --black: #1C1C1C;
    --light-red: #FF5757;
    --deep-red: #FF1818;
    --light-gray: #E8E8E8;
    --gray: #CDCDCD;
    --deep-gray: #B4B4B4;
    --super-gray: #767676;
    --success-green: #50c927;
}

html {
    width: 390px;
    height: 100vh;
    background-color: var(--light-gray);
    margin: 0 auto;
}

body {
    width: 100%;
    position: relative;
    height: 100%;
    color: var(--black);
    line-height: 1.4;
    background-color: white;
    font-family: var(--font);
    box-shadow: 0 0 10px var(--deep-gray);
}

.ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
}

/* @media all and (min-width: 720px) and (max-width: 940px) {
  html {
    width: 100vw;
  }
} */

@media all and (min-width: 720px) {
  html {
    width: 100vw;
  }
}
`;

export default GlobalStyle;
