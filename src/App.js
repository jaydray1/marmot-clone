import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Hoodies from './components/Hoodies/Hoodies';
import Details from './components/Details/Details';

import {connect} from 'react-redux';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Router/>
      </div>
    );
  }
}

export default App;
