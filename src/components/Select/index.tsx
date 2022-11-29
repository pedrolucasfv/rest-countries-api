import * as S from './styles'
import { ArrowDownS } from '@styled-icons/remix-line/ArrowDownS'
import { useState } from 'react'

export type SelectProps = {
  title: string
  items: string[]
}

const Select = ({ items, title }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.SelectBox onClick={() => setIsOpen(!isOpen)}>
        <S.Title role="heading">{title}</S.Title>
        <ArrowDownS />
      </S.SelectBox>
      {isOpen && (
        <S.Items onClick={() => setIsOpen(false)}>
          {items.map((item, index) => (
            <S.Title key={index}> {item} </S.Title>
          ))}
        </S.Items>
      )}
    </S.Wrapper>
  )
}

export default Select
