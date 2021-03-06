import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/routes/Home'
import Fullstack from './components/routes/Fullstack'
import Unity from './components/routes/Unity'
import Layout from './components/shared/Layout'
import Contact from './components/routes/Contact'
import './css/style.css'

function App()
{
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => (<Home />)} />
          <Route exact path="/unity" render={() => (<Unity />)} />
          <Route exact path="/fullstack" render={() => (<Fullstack />)} />
          <Route exact path="/contact" render={() => (<Contact />)} />
        </Switch>
      </Layout>
    </React.Fragment>
  )
}

export default withRouter(App)