import React, { Component } from 'react'

import Tabs from './Tabs'
import Cards from './Cards'

import { tabData, cardData } from '../../data'

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount() {
    this.setState({ tabs: tabData, cards: cardData })
  }

  changeSelected = tab => {
    this.setState({ selected: tab })
  }

  filterCards = () => {
    const { selected, cards } = this.state

    return selected === 'all'
      ? cards
      : cards.filter(card => card.tab === selected)
  }

  render() {
    const { tabs, selected } = this.state
    const { changeSelected, filterCards } = this

    return (
      <div className="content-container">
        <Tabs
          tabs={tabs}
          selectedTab={selected}
          selectTabHandler={changeSelected}
        />
        <Cards cards={filterCards()} />
      </div>
    )
  }
}
