import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  color?: 'light' | 'dark'
  icon?: JSX.Element
}

const Button = ({ children, color = 'light', icon }: ButtonProps) => (
  <S.Wrapper color={color} hasIcon={!!icon}>
    {icon} {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
