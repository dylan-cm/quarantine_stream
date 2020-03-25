import React from 'react'
import styled from '@emotion/styled'
import S from '../styles/style'

S.DayGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  h3 {
    margin: 0;
    padding-bottom: 2vh;
  }
`
S.Line = styled.div`
  width: 11vw;
  height: 2vh;
  border-top: 1px ${(p) => (p.dotted ? 'dashed' : 'solid')} ${(p) => p.theme.colors.light};
  opacity: ${(p) => (p.dotted ? 0.3 : 1)};
`

const DayGrid = ({ day }) => {
  var lines = []
  for (var i = 0; i < 39; i++) {
    i % 4 === 3
      ? lines.push(<S.Line key={'line-solid-' + i} />)
      : lines.push(<S.Line dotted key={'line-dotted-' + i} />)
  }
  return (
    <S.DayGrid>
      <h3>{day.charAt(0)}</h3>
      {lines}
    </S.DayGrid>
  )
}

export default DayGrid
