import React from 'react';
import ContentPage from './Content/ContentPage';

const Authenticate = App => {
    return (
        class extends React.Component {
            constructor() {
                super();
                this.state = {loggedIn: false};
            }

            componentDidMount() {
                if(localStorage.getItem("username")) {
                    this.setState({loggedIn: true});
                } else {
                    this.setState({loggedIn: false});
                }
            }

            render() {
                return (
                    this.state.loggedIn ? <ContentPage /> : <App />
                );
            }
        }
    );
}

export default Authenticate;