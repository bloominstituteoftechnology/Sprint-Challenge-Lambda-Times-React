import React, {Component} from "react";
import Tabs from './Tabs';
import Cards from './Cards';
import {tabData} from '../../data';
import {cardData} from '../../data';

class Content extends Component{
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    this.setState({tabs: tabData, cards: cardData});
  }

  changeSelected = (e) => {
   this.setState({selected: e.target.value})
    
 }

  // filterCards = () => {
  //   if(this.state.selected === this.state.cards.tab){
  //     return this.state.cards
  //   }
  //     else if(this.state.selected === 'all'){ 
      
  //     return this.state.cards}
  // }
  

  render(){
    return (
      <div className="content-container">

        <Tabs  changeSelected={this.changeSelected} 
               selectedTab={this.state.selected}
               tabs={this.state.tabs}/>
      
        <Cards cards={this.state.cards}/>      
      </div>
    )
  }
}

export default Content