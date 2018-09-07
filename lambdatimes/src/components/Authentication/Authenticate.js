import React from 'react';

const Authenticate = Content => class extends React.Component {
    constructor() {
        super();

        this.state = {
            username: 'test-username',
            loggedIn: true,
        };
    }

    componentDidMount() {
        if (localStorage.getItem('lambdaTimesLoggedIn')) {
            this.setState({
                username: localStorage.getItem('lambdaTimesLoggedIn'),
                loggedIn: true,
            });
        }
    }

    render () {
        if (this.state.loggedIn) {
            return <Content username = { this.state.username } />;
        } else {
            return null;
        }
    }
}

export default Authenticate;
