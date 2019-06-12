import React, { Component } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
import PropTypes from 'prop-types';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from "../../data";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
    // Once the component has mounted, get the data and reflect that data on the state.
  }

  changeSelected = tab => {
    this.setState({selected: tab})
    // this function should take in the tab and update the state with the new tab.
  };

 
      /* 
      Psuedo code: onClick, apply this.state.selected to tab.
      If cardData has 'selected' state on it, display, otherwise display: none
      */

  
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
   

  render() {
   
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs 
        key={Math.random()} 
        tabs={this.state.tabs} 
        selectTabHandler={this.changeSelected} 
        selectedTab={this.state.selected} />
        <Cards key={Math.random()} cards={
          //Is the selector "all" on the card?
          this.state.selected !== "all" ? this.state.cards.filter(
          //if not, filter it
            
             //Run thru this.state.cards, filter it.
             //if this.state.cards.tab is equal to the selected tab, return it,
             //otherwise return all the cards

             //card.tab is wrong, problem is, not sure how the changehandler is even working
              card => this.state.selected === card.tab) : this.state.cards}
              //otherwise return all cards
           />
      </div>
    );
  }
}

Content.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string).isRequired}
  
Content.propTypes = {
  cardData: PropTypes.arrayOf(

    PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
    })
  )
  }

  

