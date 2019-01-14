import React from 'react';
import Login from './Login';

export default Component => 
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                authed: false,
            };
        }
        componentDidMount(){
            const name = JSON.parse(localStorage.getItem('username'));
            if (name){
                this.setState({ authed: true });
            }
        }
        render(){
            return this.state.authed ? <Component /> : <Login />
        }
    }