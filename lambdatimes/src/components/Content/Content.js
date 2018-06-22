import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import {ContentContainer} from '../../CSS/ReusableStyles';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: '',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({cards: cardData, tabs: tabData});
  }

  changeSelected = (tab) => {
    return () => {
      // Finish this function, reflecting the new selected tab in the state
      this.setState({selected: tab});
    };
  }

  handleSearch = (e) => {
    const posts = this.state.posts.filter(post => {
        if(post.username.includes(e.target.value)) {
            return post;
        } else {
            return null;
        }
    });
    this.setState({filteredPosts: posts});
};

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    const cards = this.state.cards.filter(card => {
      if(card.tab.includes(this.state.selected)) {
        return card;
      }
    })
    return this.state.cards;
  }

  render(){
    return (
      <ContentContainer>
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} handleSelect={this.changeSelected}/>
        <Cards cards={this.filterCards()}/>
      </ContentContainer>
    )
  }
}