import React from 'react'
import LoginPage from '../LoginPage';

const Authenticate = App => 
    class extends React.Component{
        constructor(){
            super();
            this.state ={
                paywallclick: false
            }
             
        }
        handler = () => {
            this.setState({ paywallclick: true })
        }     
        render(){
            if (this.state.paywallclick ===false) {
            return (
           
                <LoginPage handler ={this.handler} />
            )
            }
            else{
                return <App />
            }
            
        }
    }

export default Authenticate