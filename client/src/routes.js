import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'
import { Rooms } from './components/LinkCard'
import { Hotelinfo } from './components/LinksList'
import { Footer } from './components/Bottom'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
          <Footer />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
          <Hotelinfo />
          <Rooms />
          <Footer />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
          <Footer />
        </Route>
        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
