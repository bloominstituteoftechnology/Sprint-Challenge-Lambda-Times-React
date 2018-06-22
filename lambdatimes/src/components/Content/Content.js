import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [], //took out [] and put tabsdata
      cards: [] //took out [] and put carddata
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({tabs:tabData});
    this.setState({cards:cardData});
  }
// changeTodo = e => this.setState({ [e.target.name]: e.target.value });
  changeSelected = (tab) => {
    return () => {
      this.setState({[tab.target.name]: tab.target.value});
      // Finish this function, reflecting the new selected tab in the state
    }
  };

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  // filterCards = () => {
  //   let tabs = this.state.tabs.slice();
  //   tabs = tabs.filter(tabs => {
  //     if(tabs.id === 'all'){
  //       return this.state.cards;
  //     } else{
  //     return this.state.id;
  //     }

      filterCards = () => {
        // let cards = this.state.cards.slice();
        // cards = cards.filter(cards => {
        //   if(cards.tab === 'all'){
        //     return this.state.cards;
        //   } else{
        //   return cards;
        //   }
      
    
     return this.state.cards;
  // });
  // this.setState({cards:cards});
};
// toggleTodoComplete = id => {
//   let todos = this.state.todos.slice();
//   todos = todos.map(todo => {
//     if (todo.id === id) { 
//       todo.completed = !todo.completed;
//       return todo;
//     } else {
//       return todo;
//     }
//   });
//   this.setState({ todos });
// };

  // newSearch = event => {
  //   event.preventDefault();
  //   let dummyData = this.state.dummyData.slice();
  //   dummyData = dummyData.filter(dummyData => {
  //       return dummyData.username === this.state.input});
  //   this.setState({dummyData: dummyData})
  //   // search =search.filter();
  //   alert("searched")

  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}
// addTodo = e => {
//   e.preventDefault();
//   const todos = this.state.todos.slice();
//   todos.push({ task: this.state.todo, completed: false, id: Date.now() });
//   this.setState({ todos, todo: '' });
// };

// changeTodo = e => this.setState({ [e.target.name]: e.target.value });

// toggleTodoComplete = id => {
//   let todos = this.state.todos.slice();
//   todos = todos.map(todo => {
//     if (todo.id === id) { 
//       todo.completed = !todo.completed;
//       return todo;
//     } else {
//       return todo;
//     }
//   });
//   this.setState({ todos });
// };