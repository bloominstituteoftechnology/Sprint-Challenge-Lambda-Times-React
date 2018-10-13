import React, {Component} from 'react';

class Login extends Component { 
    constructor(props) { 
        super(props)

        this.state = { 
            username: '',
            password: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleLoginSubmit = (event) => { 
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() { 
        return ( 
            <div className="loginWrap">
            <form onSubmit={this.handleLoginSubmit}>
             <input
                name="username"
                placeholder="You Sir Name"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange} />
            <input 
                name="password"
                placeholder="pw"
                type="text"
                value={this.state.password}
                onChange={this.handleInputChange} />
            <button><p>Click here to log in</p></button>
            </form>
            </div>
        )
    }
}



export default Login;