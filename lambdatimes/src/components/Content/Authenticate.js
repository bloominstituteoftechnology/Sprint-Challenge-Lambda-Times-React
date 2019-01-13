import React from 'react';
import Login from '../Login';

const Authenticate = App => class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedInUser: false
        };
    }

    // make a component did mount
            componentDidMount(){
                     // with it create a boolean true or false for localstorage.. get the user from getItem method
                if(!localStorage.getItem('user')) {
                    // set the state to false
                    return this.setState({
                        loggedInUser: false
                    })
                } else 
                return this.setState({ loggedinUser: true})
                // for else return the logged in state to true
            }
    


    render() {
            // return the app if user is logged in 
         
                {if (this.state.loggedinUser) 
                    return <App />;

                    return <Login />;
                    
                }

        // return login page if user is not logged in.
    }

}

export default Authenticate;