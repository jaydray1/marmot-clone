import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import App from './App'
import Details from './components/Details/Details'
import Hoodies from './components/Hoodies/Hoodies'
import Landing from './components/Landing/Landing'
import Nav from './components/Nav/Nav'


const Router = () => (
  <div>
    <Nav></Nav>
    <Switch>
      <Route component={ Landing } exact path="/"/>
      <Route component={ Hoodies } path="/hoodies"/>
      <Route component={ Details } path="/hoodies-details" />
    </Switch>
  </div>
);

export default Router