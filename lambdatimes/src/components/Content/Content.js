import React, {Component} from "react";
import Tabs from './Tabs';
import Cards from './Cards';
import {tabData} from '../../data';
import {cardData} from '../../data';

class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    this.setState({tabs: tabData, cards: cardData});
  }

  changeSelected = (tabs) => {
   this.setState({selected: tabs})
    
 }

  filterCards = () => {
    if(this.state.selected === 'all'){
      return cardData;
    }
    else {const filteredData = cardData.filter(card => {
        return card.tab === this.state.selected;
      });
    return filteredData; 
    }
  }
  

  render(){
    return (
      <div className="content-container">

        <Tabs  changeSelected={this.changeSelected} 
               selectedTab={this.state.selected}
               tabs={this.state.tabs}/>
      
        <Cards cards={this.filterCards()}/>      
      </div>
    )
  }
}

export default Content