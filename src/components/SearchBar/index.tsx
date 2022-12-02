import * as S from './styles'
import { Search } from '@styled-icons/heroicons-solid/Search'
import { useState, InputHTMLAttributes } from 'react'

export type SearchBarProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  color: 'light' | 'dark'
} & InputHTMLAttributes<HTMLInputElement>

const SearchBar = ({
  label,
  initialValue,
  onInputChange,
  name,
  color,
  ...props
}: SearchBarProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.InputWrapper color={color}>
        <S.Icon>
          <Search />
        </S.Icon>

        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default SearchBar
