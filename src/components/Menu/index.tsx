import { Moon } from '@styled-icons/heroicons-solid/Moon'
import { Sun } from '@styled-icons/heroicons-solid/Sun'
import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type MenuProps = {
  color?: 'light' | 'dark'
  changeColor: () => void
}

const Menu = ({ color = 'light', changeColor }: MenuProps) => (
  <S.Wrapper color={color}>
    <Link href="/" passHref>
      <S.Logo color={color} role="button">
        Where in the world?
      </S.Logo>
    </Link>
    {color == 'light' && (
      <S.Button onClick={() => changeColor()}>
        <Button color={color} minimal icon={<Moon />}>
          Dark Mode
        </Button>
      </S.Button>
    )}

    {color == 'dark' && (
      <S.Button onClick={() => changeColor()}>
        <Button color={color} minimal icon={<Sun />}>
          Light Mode
        </Button>
      </S.Button>
    )}
  </S.Wrapper>
)

export default Menu
