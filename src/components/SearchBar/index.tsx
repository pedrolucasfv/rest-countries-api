import * as S from './styles'
import { Search } from '@styled-icons/heroicons-solid/Search'
import { useState, InputHTMLAttributes } from 'react'

export type SearchBarProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const SearchBar = ({
  label,
  initialValue,
  onInputChange,
  name,
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
      {!!label && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
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
