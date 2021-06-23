import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Home } from './pages'
import { Project } from './pages'
import { AddNew } from './pages'
import { Admin } from './pages'

export function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/project/:id">
        <Project />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/add">
        <AddNew />
      </Route>
    </Switch>
  )
}
