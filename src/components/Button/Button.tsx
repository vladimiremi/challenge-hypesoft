import * as S from './Button.styled'

interface ButtonProps {
  children: React.ReactNode
  color?: string
}

export function Button({ children, color }: ButtonProps) {
  return <S.Button color={color}>{children}</S.Button>
}
