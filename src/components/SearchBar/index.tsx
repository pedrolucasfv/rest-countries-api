import { Search } from '@styled-icons/heroicons-solid/Search'
import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

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
          autoComplete="no"
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default SearchBar
