import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
        };
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleLogin = e => {
        e.preventDefault();
        localStorage.setItem('username', JSON.stringify(this.state.name));
        localStorage.setItem('password', JSON.stringify(this.state.password));
        window.location.reload();
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <input 
                        type="text" 
                        placeholder="Display Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}    
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;