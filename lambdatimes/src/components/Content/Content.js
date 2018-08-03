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
    return () => {
      this.setState({selected: e.target.value})
    }
 }

  filterCards = (e) => {
    if(this.state.selected === 'all'){
    return this.state.cards;}
       else {
         return this.state.selected
       }
  }

  render(){
    return (
      <div className="content-container">

        <Tabs  changeSelected={this.changeSelected} 
               selectedTab={this.state.selected}
               tabs={this.state.tabData}/>
      
        <Cards cards={this.filterCards()}/>
      
      </div>
    )
  }
}

export default Content