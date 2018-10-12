import React, { Component } from 'react';
import Tabs from './Tabs';
import Cards from './Cards';
import { tabData, cardData } from '../../data';
import Styled from 'styled-components';

const ContentContainer = Styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs:tabData,cards:cardData})
  }

  selectTabHandler = event =>{
    this.setState({selectedTab:event.target.innerText})
  }

  filterCards = () => {

    if(this.state.selectedTab.toLowerCase() ==='all'){return this.state.cards;}
    return this.state.cards.filter(element =>{
        if(element.tab.toLowerCase() === this.state.selectedTab.toLowerCase()){
          return element
        }
    })
    
  };

  render() {
    return (
      <ContentContainer>
        <Tabs 
            tabs={this.state.tabs}
            selectTabHandler={this.selectTabHandler}
            selectedTab = {this.state.selectedTab}
         />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
