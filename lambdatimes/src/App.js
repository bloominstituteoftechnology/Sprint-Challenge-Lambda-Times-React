import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from './data';

class App extends Component {

  constructor() {

    super();
    this.state = {

      username: '',
      logBtnPressed: false,
      tabData: [],
      cardData: []

    }

  }

  componentDidMount() {

    if (localStorage.tabData)
      this.setState({tabData: JSON.parse(localStorage.tabData)});

    else
      this.setState({tabData: tabData});

    if (localStorage.cardData)
      this.setState({cardData: JSON.parse(localStorage.cardData)});

    else
      this.setState({cardData: cardData});

    if (localStorage.username)
      this.setState({username: localStorage.username});

  }

  componentDidUpdate() {

    localStorage.tabData = JSON.stringify(this.state.tabData);
    localStorage.cardData = JSON.stringify(this.state.cardData);
    localStorage.username = this.state.username;

  }

  setUsername = newUser => {

    this.setState({username: newUser});

  }

  toggleBtnPress = () => {

    this.setState({logBtnPressed: !this.state.logBtnPressed});

  }

  addCard = (card, tab) => {

    if (!this.state.tabData.includes(tab)) {

      const newTabData = this.state.tabData;
      newTabData.push(tab);

      this.setState({tabData: newTabData});

    }

    const newCardData = this.state.cardData;
    newCardData.unshift(card);

    this.setState({cardData: newCardData});

  }

  render() {

    return (
      <div className="App">
        <TopBar
          username={this.state.username}
          setUsername={this.setUsername}
          toggleBtnPress={this.toggleBtnPress}
          addCard={this.addCard}
        />
        <Header />
        <Login
          setUsername={this.setUsername}
          logBtnPressed={this.state.logBtnPressed}
          toggleBtnPress={this.toggleBtnPress}
        />
        {this.state.username !== '' && <Content tabData={this.state.tabData} cardData={this.state.cardData}/>}
      </div>
    );

  }

}

export default App;
