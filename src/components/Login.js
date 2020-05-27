import React, {Component} from 'react';
import {Button, FormGroup, Label, Input, Form} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("user", this.state.user);
        localStorage.setItem("password", this.state.password);

        this.setState({
            user: "",
            password: ""
        })
        window.location.reload(true);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} style={{marginTop: '40px', padding: '20px', border: '1px dotted black'}}>
                <FormGroup style={{padding: '10px 0'}}>
                    <Label
                        for="Email"
                    >Username</Label>
                    <Input
                        type="text"
                        name="user"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={this.state.user}
                        style={{maxWidth: '400px', width: '100%', padding: '5px'}}
                    />
                </FormGroup>
                <FormGroup style={{padding: '10px 0'}}>
                    <Label
                        for="Password"
                    >Password</Label>

                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    style={{maxWidth: '400px', width: '100%', padding: '5px'}}
                />    
                </FormGroup>
                <Button color="primary">LOG IN</Button>
            </Form>
        )
    }

}

export default Login;