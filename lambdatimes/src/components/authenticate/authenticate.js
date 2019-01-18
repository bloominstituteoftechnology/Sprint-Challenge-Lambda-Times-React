import React from 'react'

const authenticate = Content => Login => {
    return class extends React.Component{
        constructor(){
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount(){
            this.setState({
                loggedIn: localStorage.getItem('loggedIn')
            })
        }

        render(){
            return this.state.loggedIn ? <Content /> : <h1>Login to see the news</h1>
        }
    }
}

export default authenticate;