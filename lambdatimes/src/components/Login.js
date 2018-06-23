import React from 'react';
import {TopBarBox, ContainerCenter} from '../CSS/ReusableStyles';

const Login = props => {
    return (
        class extends React.Component {
            constructor() {
                super();
                this.state = {
                    username: ""
                };
            }

            componentDidMount() {
                if(localStorage.getItem('username')) {
                    this.setState({username: this.state.username});
                } else {
                    this.setUser();
                }
            }

            setUser = () => {
                localStorage.setItem("username", this.state.username);
            }

            handleUserChange = e => {
                this.setState({"username": e.target.value});
            }

            handleSubmit = e => {
                this.setUser();
                window.location.reload();
            }

            render() {
                return (
                    <TopBarBox>
                        <ContainerCenter>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.username}
                                placeholder="username"
                                onChange={this.handleUserChange}
                            />
                            <button type="submit">Log In</button>
                        </form>
                        </ContainerCenter>
                    </TopBarBox>
                );
            }
        }
    );
}

export default Login;