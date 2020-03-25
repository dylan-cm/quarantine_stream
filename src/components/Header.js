import React from 'react'
import styled from '@emotion/styled'
import ViewDayIcon from '@material-ui/icons/ViewDay'
// import ViewWeekIcon from '@material-ui/icons/ViewWeek'
// import ViewMonthIcon from '@material-ui/icons/DateRange'
import AddBoxIcon from '@material-ui/icons/AddBox'
import SearchIcon from '@material-ui/icons/Search'
import S from '../styles/style'

S.Header = styled.div`
  color: ${(p) => p.theme.colors.light};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;
  height: 12vh;
  box-sizing: border-box;

  h2 {
    font-family: 'Lato';
    font-size: 4vh;
    font-weight: 800;
    margin: 0;
  }
`

S.Pair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  text-align: center;

  color: ${(p) => p.theme.colors.light};

  cursor: pointer;

  padding-left: 16px;
  padding-right: 16px;

  h6 {
    padding: 0;
    margin: 0;
    padding-left: 8px;
  }

  &:hover {
    color: ${(p) => p.theme.colors.green};
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    h6 {
      padding-left: 0;
      padding-top: 8px;
    }
  }

  @media screen and (max-width: 370px) {
    padding-left: 8px;
    padding-right: 8px;
    h6 {
      display: none;
    }
  }
`

function Header() {
  return (
    <S.Header>
      <h2>Quarantine Stream</h2>
      <S.Pair>
        <ViewDayIcon />
        <h6>Week View</h6>
      </S.Pair>
      <S.Pair>
        <SearchIcon />
        <h6>Filter</h6>
      </S.Pair>
      <S.Pair>
        <AddBoxIcon />
        <h6>Add an event</h6>
      </S.Pair>
    </S.Header>
  )
}

export default Header
