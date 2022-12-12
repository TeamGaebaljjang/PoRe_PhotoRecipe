import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

:root {
    --black : #1C1C1C;
    --light-red : #FF5757;
    --deep-red : #FF1818;
    --light-gray : #E8E8E8;
    --gray : #CDCDCD;
    --deep-gray: #B4B4B4;
    --super-gray : #767676;
}

${reset}

.ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
}
`;

export default GlobalStyle;
