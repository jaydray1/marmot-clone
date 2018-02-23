import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './ducks/store';
import Router from './router';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <Router />
    </Provider>
</BrowserRouter>, 
document.getElementById('root'));

