import styled from 'styled-components'

import { theme } from 'styles'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: ${theme.metrics.large * 3}px;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 758px;
  z-index: 10;
`
export const Title = styled.div`
  h1 {
    font-weight: normal;
    font-size: 5rem;
  }
  h2 {
    color: ${theme.colors.secondary};
    font-weight: normal;
    font-size: 5rem;
  }
`

export const Description = styled.div`
  padding: 32px 0;
  color: ${theme.colors.gray['500']};
  line-height: 32px;
  font-size: 1.25rem;
  z-index: 10;
`

export const Buttons = styled.div`
  display: flex;

  gap: 20px;
`

export const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 202px;
  gap: 20px;
  font-size: 1rem;
  div {
    display: flex;
    gap: 20px;
  }
`

export const ContainerMenu = styled.div`
  display: flex;
  background-color: ${theme.colors.secondary};

  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  width: 40%;
`

export const Image = styled.div`
  background-color: ${theme.colors.secondary};
  display: flex;
  width: 870px;
  height: 974px;

  position: relative;

  img {
    width: 100%;
    position: absolute;
    left: -10%;
  }
`
