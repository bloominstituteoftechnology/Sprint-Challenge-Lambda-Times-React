import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    this.setState({ 
      tabs: tabData.slice(),
      cards: cardData.slice(),
      selected: tabData[0]
    })
  }

  changeSelected = (tab) => {
    this.setState({ selected: tab })
  }

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter (card => card.tab === this.state.selected)
    }
  }

  render(){
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} selected={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}

export default Content;