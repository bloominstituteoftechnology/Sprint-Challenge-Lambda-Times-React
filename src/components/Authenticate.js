import React, {Component} from 'react';
import Login from './Login';

const Authenticate = (Content) =>
class extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loggedIn: false
         }
    }

    componentDidMount() {
        if(!localStorage.getItem("user")) {
            this.setState({loggedIn: false});
        } else {
            this.setState({loggedIn: true})
        }
    }

    render() { 
        if (this.state.loggedIn) {
            return ( <Content />)
        } else {
            return ( <Login /> )
        }
    }
}
 
export default Authenticate;