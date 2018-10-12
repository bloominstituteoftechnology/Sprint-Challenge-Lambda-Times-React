import React from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Content from "./components/Content/Content";
import Login from "./components/Login";

const HOCloginHandle = (Comp1, Comp2) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = { loggedIn: false };
    }

    componentDidMount() {
      if (localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (!this.state.loggedIn) {
        return <Comp1 />;
      } else {
        return <Comp2 />;
      }
    }
  };

const Chosen = HOCloginHandle(Content, Login);
const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Chosen />
    </div>
  );
};

export default App;
