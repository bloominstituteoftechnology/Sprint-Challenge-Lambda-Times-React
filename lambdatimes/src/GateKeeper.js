import React, { Component } from 'react'
import App from './components/App';
import Login from './components/Login';
import authenticate from './components/Authenticate';

export default class GateKeeper extends Component {

    render() {
    return (
       <WithAuthenticate />
    )
    }
}

const WithAuthenticate = authenticate(App)(Login);