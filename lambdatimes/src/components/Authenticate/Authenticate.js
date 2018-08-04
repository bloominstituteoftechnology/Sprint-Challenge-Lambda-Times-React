import React from 'react';

const Authenticate=Content=>
    class extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                loggedIn:false
            }
        }
        componentDidMount() {
            if (localStorage.getItem('username')) {
                this.setState({loggedIn:true});
            }
        }
        render() {
            return(
                <div>
                    {this.state.loggedIn===true ? <Content/>:null}
                </div>
            )
        }
    }

export default Authenticate;