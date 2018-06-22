import React from 'react';

const Authenticate = Content =>
    class extends React.Component {
        constructor() {
            super();

            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        }

        render() {
            if (this.state.loggedIn) return <Content />
            return null;
        }
    }

export default Authenticate;