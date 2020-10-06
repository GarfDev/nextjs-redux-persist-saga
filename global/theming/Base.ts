import { createGlobalStyle } from "styled-components";

const BaseStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  article, aside, footer, header, hgroup, main, nav, section {
    display: block;
  }

  #app {
    width: 100%;
  }
  body {
    line-height: 1;
    font-size: 18px;
    font-family: 'Source Sans Pro', sans-serif;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    border-color: ${({ theme }) => theme.borderColor};
    margin: 0;
    padding: 0;
  }
`;

export default BaseStyle;
