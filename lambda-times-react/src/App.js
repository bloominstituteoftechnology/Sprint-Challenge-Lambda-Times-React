import React from 'react';
import TopBar from './Components/TopPageBar';
import Header from './Components/Header';
import Content from './Components/Content/Content';
import Authenticate from './Components/Authentication/Authenticate';
import Carousel from './Components/Carousel/Carousel';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    logout = e => {
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <div className="App">
                <TopBar logout={this.logout} />
                <Header />
                <Carousel />
                <Content />
            </div>    
        )
    }
}

export default Authenticate(App);
