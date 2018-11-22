import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
// import { NONAME } from 'dns';

export default class Content extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: [],
      tabSelected: false,
    };
  }

  componentDidMount() {
      this.setState({
        tabs: tabData,
        cards: cardData,
        
      })
  }

  selectedTab = () => {
    this.setState({
      tabSelected: true,
    })
   console.log(this.state)
  }

 

 


  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs}  selectedTab={this.selectedTab}/>
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
