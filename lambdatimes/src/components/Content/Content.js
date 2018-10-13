import React, { Component } from "react"

import Tabs from "./Tabs"
import Cards from "./Cards"

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from "../../data"

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    }
  }

  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    console.log(tab)
    this.setState({
      selected: tab
    })
  }

  filterCards = tab => {
    /* 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    // console.log(newCards)
    const { selected } = this.state
    let newCards = this.state.cards
    if (selected === "all") {
      return newCards
    } else {
      return newCards.filter(newCard => newCard.tab === selected)
    }
  }

  render() {
    return (
      <div className="content-container">
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    )
  }
}
