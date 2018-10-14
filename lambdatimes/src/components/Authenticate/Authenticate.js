import React from 'react';
import Login from '../Login'

export default PassedComponent => class extends React.Component {
    render() {
        return localStorage.getItem('username') ? <PassedComponent /> : <Login />
    }
}