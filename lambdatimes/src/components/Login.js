import React, {Component} from 'react';
import {Button, FormGroup, Label, Input, From} from 'reactstrap';

class Login extends React {
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
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label
                        for="Email"
                    >Username</Label>
                    <Input
                        type="text"
                        name="user"
                        placeholder="Username"
                        onChange={this.handleChange}
                        value={this.state.user}
                    />
                </FormGroup>
                <FormGroup>
                    <Label
                        for="Password"
                    >Password</Label>

                <Input
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                />    
                </FormGroup>
                <Button color="primary">Submit</Button>
            </Form>
        )
    }

}

export default Login;