import * as S from './TopNav.styled'
import Link from 'next/link'

export function TopNav() {
  return (
    <S.Header>
      <nav>
        <S.List>
          <li>
            <Link href='/'>ABOUT</Link>
          </li>

          <li>
            <Link href='/'>SERVICES</Link>
          </li>

          <li>
            <Link href='/'>WORKS</Link>
          </li>

          <li>
            <Link href='/'>CONTACT</Link>
          </li>
        </S.List>
      </nav>
    </S.Header>
  )
}
