import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
        @media (min-width: 1920px) {
            font-size: 100%; //15px
        }
        @media (min-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 950px) {
            font-size: 87.5%; //14px
        }
    }


  body {
    background: ${theme.colors.primary};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${theme.colors.white};
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: ${theme.colors.black};
    background:  ${theme.colors.white};
  }
`
