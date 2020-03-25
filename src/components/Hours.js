import React from 'react'
import styled from '@emotion/styled'
import S from '../styles/style'

S.Hours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  padding-top: 10vh;
  padding-left: 16px;
  padding-right: 16px;

  h5 {
    margin: 0;
    padding-bottom: Calc(6vh + 3px);
  }
`

const Hours = () => {
  return (
    <S.Hours>
      <h5>4:20</h5>
      <h5>5:00</h5>
      <h5>6:00</h5>
      <h5>7:00</h5>
      <h5>8:00</h5>
      <h5>9:00</h5>
      <h5>10:00</h5>
      <h5>11:00</h5>
      <h5>12:00</h5>
    </S.Hours>
  )
}

export default Hours
