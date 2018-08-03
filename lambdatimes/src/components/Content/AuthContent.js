import React, {Component} from 'react';
import Login from '../Login';

const Auth = Content => {
    return class extends Component {
        render () {
            return localStorage.getItem('login') ? 
                <Content /> : 
                <Login isOpen={this.props.isOpen} toggle={this.props.toggle} />;
        }
    };
};

export default Auth;