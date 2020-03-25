import React from 'react'
import styled from '@emotion/styled'
import { S } from '../styles/style'

S.Header = styled.div`
  background-color: ${(p) => p.theme.colors.dark};
  color: ${(p) => p.theme.colors.light};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <S.Header>
      <h2>Quarantine Stream</h2>
    </S.Header>
  )
}

export default Header
