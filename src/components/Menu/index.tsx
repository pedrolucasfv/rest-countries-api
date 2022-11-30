import Button from 'components/Button'
import * as S from './styles'
import { Moon } from '@styled-icons/heroicons-solid/Moon'
import { Sun } from '@styled-icons/heroicons-solid/Sun'
export type MenuProps = {
  color?: 'light' | 'dark'
}

const Menu = ({ color = 'light' }: MenuProps) => (
  <S.Wrapper color={color}>
    <S.Logo>Where in the world?</S.Logo>
    {color == 'light' && (
      <Button color={color} minimal icon={<Moon />}>
        Dark Mode
      </Button>
    )}

    {color == 'dark' && (
      <Button color={color} minimal icon={<Sun />}>
        Light Mode
      </Button>
    )}
  </S.Wrapper>
)

export default Menu
