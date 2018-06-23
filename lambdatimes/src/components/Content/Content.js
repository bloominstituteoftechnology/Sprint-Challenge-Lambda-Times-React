import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import Carousel from '../Carousel/Carousel';
import {ContentContainer} from '../../CSS/ReusableStyles';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({cards: cardData, tabs: tabData});
  }

  changeSelected = (tab) => {
      // Finish this function, reflecting the new selected tab in the state
    this.setState({selected: tab});
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    if(this.state.selected === "all") {
      return cardData;
    } else {
      return cardData.filter(card => {
        return card.tab === this.state.selected;
      });
    }  
  }

  render(){
    return (
      <ContentContainer>
        <Carousel />
        <Tabs tabs={this.state.tabs} selected={this.state.selected} handleSelect={this.changeSelected}/>
        <Cards cards={this.filterCards()}/>
      </ContentContainer>
    );
  }
}