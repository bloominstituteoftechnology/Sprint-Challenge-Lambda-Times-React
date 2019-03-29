import React from "react";

const withAuthenticate = Content => Placeholder =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.username && localStorage.password) {
        this.setState({
          loggedIn: true
        });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <Content />;
      } else {
        return <Placeholder />;
      }
    }
  };

export default withAuthenticate;
