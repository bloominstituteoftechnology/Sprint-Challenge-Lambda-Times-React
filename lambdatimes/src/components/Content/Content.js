import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from './../Carousel/Carousel'
import { tabData, cardData } from '../../data';


export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = event => {
      this.setState({
        selected: event.target.id
      })
      if (this.state.selected === 'all') {
        this.setState({
          cards: cardData
        })
      } else {
        this.setState({
          cards: cardData.filter(card => card.tab === this.state.selected)
      })
    }
  };

  render() {
    console.log(this.state.selected)

    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={(event) => this.changeSelected(event)}/>
        <Carousel />
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}

