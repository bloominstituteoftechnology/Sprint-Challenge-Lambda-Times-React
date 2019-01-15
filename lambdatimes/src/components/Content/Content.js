import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import { NONAME } from 'dns';

export default class Content extends Component {
  constructor(props) {
    console.log('component')
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: [],
      selected: false,
    };
  }

  componentDidMount() {
    console.log('mounting')
      this.setState({
        tabs: tabData,
        cards: cardData,
        
      })
  }



  // changeSelected = tab => {
  //   tab.preventDefault();
  //       let selected = this.state.selected;
  //           if (selected === false) {
                
  //           } else {
                
  //           }
  // };

  // filterCards = () => {
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
  //   return this.state.cards;
  // };

  render() {
    console.log(this.state)
    console.log('render')
    
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} changeSelected={this.changeSelected}/>
        <Cards cards={this.state.cards}
        // cards={this.filterCards()} 
        />
      </div>
    );
  }
}


Content.propTypes = {
  props: PropTypes.shape({
      selects: PropTypes.string,
      tabs: PropTypes.arrayOf(PropTypes.string),
      cards: PropTypes.arrayOf(PropTypes.shape({
        headline: PropTypes.string,
        tab: PropTypes.string,
        img: PropTypes.string,
        author: PropTypes.string,
      }))

  })
}
