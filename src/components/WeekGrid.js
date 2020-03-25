import React from 'react'
import styled from '@emotion/styled'
import DayGrid from './DayGrid'
import S from '../styles/style'
import Hours from './Hours'

S.WeekGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
`

const WeekGrid = () => {
  return (
    <S.WeekGrid>
      <Hours />
      <DayGrid day="Monday" />
      <DayGrid day="Tuesday" />
      <DayGrid day="Wednesday" />
      <DayGrid day="Thursday" />
      <DayGrid day="Friday" />
      <DayGrid day="Saturday" />
      <DayGrid day="Sunday" />
      <Hours />
    </S.WeekGrid>
  )
}

export default WeekGrid
