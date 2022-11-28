import Button from 'components/Button'
import * as S from './styles'
import { Moon } from '@styled-icons/heroicons-solid/Moon'

const Menu = () => (
  <S.Wrapper>
    <S.Logo>Where in the world?</S.Logo>
    <Button minimal icon={<Moon />}>
      Dark Mode
    </Button>
  </S.Wrapper>
)

export default Menu
