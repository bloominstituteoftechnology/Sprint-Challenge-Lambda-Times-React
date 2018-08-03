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
      selected: 'javascript',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({ tabs: tabData });
    this.setState({ cards: cardData });
  }

  changeSelected = (tab) => {
    return () => {
      // Finish this function, reflecting the new selected tab in the state
    }
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it shoudl only return 
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    return this.state.cards;
  }


  // filterCards = () => {
  //   const cards = this.state.cards.slice();
  //   const newCards = cards.filter(card => card.tab === this.state.selected);
  //   this.setState({cards: newCards})
  //   return this.state.cards;
  // }

  searchPostsHandler = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

    handleClearCompleted = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    const newTodos = todos.filter(todo => todo.completed === false);
    this.setState({todos: newTodos});
  }


  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs selectedTab={this.state.selected} selectedTabHandler={this.state.changeSelected} tabs={this.state.tabs}/>
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}