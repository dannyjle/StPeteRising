import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import { Home, Project, AddNew, Login, Layout, SignUp } from './pages'

export function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/project/:id">
          <Project />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/add">
          <AddNew />
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </Layout>
  )
}
