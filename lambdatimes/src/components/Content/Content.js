import React, { Component } from 'react';
import '../../CSS/index.css'
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: tabData,
      cards: cardData,
     };
    
console.log(tabData);
console.log(cardData);/* this.state.tabs = this.tabData; */
  }

  componentDidMount() {
    
    // Once the component has mounted, get the data and reflect that data on the state.
  /*  tabData.map(item, index) */
  console.log("and the state is:" + this.state)
  /*   this.setState({ tabData: this.tabData, cardData: cardData }) */
   console.log(this.state) 
  }

 
  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
  /*  if (this.state.selected === 'all') {
    return this.state.cards;
  }
      let filteredCards = this.state.cards.filter(function (card) {
      return card.tab === this.state.selected;
  } */
     return this.state.cards; 

  }
  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}

        <Tabs tabs={this.state.tabs} selected={this.state.selected} selectTabHandler={this.changeSelected}/>
     {/*  {cardData.map((cards, index) => {
        return <Cards key={index} img={cards.img} tab={cards.tab} author={cards.author} headline={cards.headline}/>
     } ) }  */}
     <Cards cards={this.state.cards}/>
       {/*  <Cards cards={this.filterCards()} /> */}
      </div>
    );
  }
}
/* export default Content; */