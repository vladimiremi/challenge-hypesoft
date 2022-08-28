import styled from 'styled-components'
import { theme } from 'styles'

export const Button = styled.button`
  background-color: ${({ color }) =>
    color === 'white' ? 'white' : theme.colors.secondary};
  padding: 20px;
  color: ${({ color }) =>
    color === 'white' ? theme.colors.black : theme.colors.white};
  font-weight: 600;
  font-size: 1rem;

  border-radius: 5px;
`
