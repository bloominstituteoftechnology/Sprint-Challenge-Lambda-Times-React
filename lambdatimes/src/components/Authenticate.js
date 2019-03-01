import React, { Component } from 'react'



const authenticate = App => Login =>
    class extends Component {
        constructor(props){
            super(props);
            this.state = {
            login: false

            }
        }



        componentDidMount(){
            if(localStorage.getItem('username')){
            this.setState({login: true})
            } else {
            this.setState({login: false})
            }
        }

        render(){
            
            if(this.state.login){
                return <App />
            } else {
                return <Login />
            }

            
            
        }
    }


export default authenticate;
