import React from 'react'
import WeekView from '../containers/WeekView'
import Header from '../components/Header'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import S from '../styles/style'

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <ThemeProvider theme={S.t}>
        <Global styles={S.global} />
        <Header />
        <Switch>
          <Route path="/" component={WeekView} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default Routes
