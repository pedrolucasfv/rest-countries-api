import { ArrowLeftS } from '@styled-icons/remix-line/ArrowLeftS'

import { useState } from 'react'
import * as S from './styles'

export type SelectProps = {
  title: string
  items: string[]
  color?: 'light' | 'dark'
  regionSelected: (region: string) => void
}

const Select = ({
  items,
  title,
  color = 'light',
  regionSelected
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.Items
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
        isOpen={!isOpen}
      >
        {items.map((item, index) => (
          <S.Item
            key={index}
            onClick={() => regionSelected(item)}
            color={color}
          >
            {item}
          </S.Item>
        ))}
        <S.Clear color={color} onClick={() => regionSelected('clear')}>
          Limpar
        </S.Clear>
      </S.Items>
      <S.SelectBox
        color={color}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <ArrowLeftS />
        <S.Title role="heading">{title}</S.Title>
      </S.SelectBox>
    </S.Wrapper>
  )
}

export default Select
