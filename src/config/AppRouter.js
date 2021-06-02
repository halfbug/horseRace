import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Dashboard from '../screens/Dashboard.jsx'
import Login from '../screens/Login.js'
import Signup from '../screens/Signup.js'


export default class Routers extends Component {
    render() {
        return (
            <Router>
                <Route path='/' exact component={Login} />
                <Route path='/dashboard'  component={Dashboard} />
                <Route path='/signup'  component={Signup}  />
              



                
            </Router>
       )
    }
};