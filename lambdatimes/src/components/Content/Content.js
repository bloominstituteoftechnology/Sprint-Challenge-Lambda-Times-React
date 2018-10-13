import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs:tabData,
      cards:cardData,
    })
    
    // Once the component has mounted, get the data and reflect that data on the state.
  }

  changeSelected = tab => {
    this.setState({
      selected:tab
    })
    // this function should take in the tab and update the state with the new tab.
  };
   

  filterCards = () => {
   const cardArray = [...this.state.cards];
   const newSelectedCardArray = [];
   if(this.state.selected === 'all'){
     return cardArray
   }else{
     cardArray.filter((card) =>{
       if(card.tab === this.state.selected){
         newSelectedCardArray.push(card)
       }
     })
     return newSelectedCardArray
   }
};

  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab = {this.state.selected} 
          selectTabHandler = {this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
Content.propTypes = {
  cardData : PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string,
    }).isRequired
  )
}
Content.propTypes = {
  tabData : PropTypes.arrayOf(
    PropTypes.string
  )
}