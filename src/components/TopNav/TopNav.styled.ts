import styled from 'styled-components'
import { theme } from 'styles'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: right;

  /* width: 30%; */
  nav {
    background: ${theme.colors.secondary};
    padding: 15px 140px 15px 47px;
  }
`

export const List = styled.ul`
  text-align: right;
  display: flex;
  align-items: center;

  a,
  li {
    cursor: pointer;
    transition: 3s;
  }
  li {
    display: inline;
    padding: 15px;
    @media (max-width: 920px) {
      /* display: none; */
    }
    a {
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.875rem;
    }
  }

  li:hover {
    text-decoration: underline;
  }
`
