import React, {Component} from 'react';
import Login from '../Login';

const Auth = Content => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false,
            };
        }

        componentDidMount() {
            localStorage.getItem('login') && 
            this.setState({
                loggedIn: true,
            });
        }

        render () {
            return this.state.loggedIn ? <Content /> : <Login />;
        }
    };
};

export default Auth;