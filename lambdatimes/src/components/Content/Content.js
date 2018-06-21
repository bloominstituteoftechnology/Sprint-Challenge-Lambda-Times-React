import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';
// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  state = {
    selected: 'all'
  }

  changeSelected = (tab) => {
    return () => {
      this.setState({selected: tab})
    }
  }

  /* Complete this funciton, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    // return cardData
    if(this.state.selected === 'all'){
      return cardData
    } else {
      return cardData.filter( card => {
        return card.tab === this.state.selected
      })
    }
  }

  render(){
    return (
      <div className="content-container">
        <Tabs tabs={tabData} selected={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Carousel />
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}