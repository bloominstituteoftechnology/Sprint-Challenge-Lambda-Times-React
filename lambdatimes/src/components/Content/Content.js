import React, { Component } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
import propTypes from "prop-types"

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
    this.setState({tab: this.state.selected})

    // this function should take in the tab and update the state with the new tab.
  };

  filterCards = () => {
      /* 
      Psuedo code: onClick, apply this.state.selected to tab.
      If cardData has 'selected' state on it, display, otherwise display: none
      */

    // if (this.state.tabData === this.state.tabData[0]) {
    //   return this.state.tabs
    // }

    //   else if (this.state.tabs.includes(this.state.selected)) {
    //     return this.state.tabs.selected
    //   }

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
    return this.state.cards;
  };

  render() {
   
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs key={Math.random()} tabs={this.state.tabs} selectTabHandler={this.changeSelected} selectedTab={this.state.selected} />
        <Cards key={Math.random()} cards={this.filterCards()} />
      </div>
    );
  }
}

// Proptypes not working, don't have time to screw with it while
// the deadline is approaching.

// Content.propTypes={

//   tabData: PropTypes.array,

  // cardData: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     headline: propTypes.string.isRequired
  // tab: propTypes.string.isRequired
  // img: propTypes.string.isRequired
  // author: propTypes.string.isRequired
  //   })
  // )
  //}
  

