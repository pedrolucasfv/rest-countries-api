import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  color?: 'light' | 'dark'
  icon?: JSX.Element
  minimal?: boolean
}

const Button = ({
  children,
  color = 'light',
  icon,
  minimal = false
}: ButtonProps) => (
  <S.Wrapper color={color} hasIcon={!!icon} minimal={minimal}>
    {icon} {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
