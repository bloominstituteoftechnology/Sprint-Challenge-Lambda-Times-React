import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Tabs from './Tabs'
import Cards from './Cards'
import { UncontrolledCarousel } from 'reactstrap'

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData, carouselData } from '../../data'

export default class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount () {
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({ tabs: tabData, cards: cardData })
  }

  changeSelected = (tab) => {
    // Finish this function, reflecting the new selected tab in the state
    this.setState({ selected: tab })
  }

  /* Complete this function, if the selected tab is 'all' it should return all
     of the items from cardData. If it is something else, it should only return
     those cards whose 'tab' matched that which is selected. */
  filterCards = () => {
    const filteredCards = this.state.cards.filter((card) => {
      if (this.state.selected === 'all') {
        return true
      } else {
        return card.tab === this.state.selected
      }
    })
    return filteredCards
  }

  render () {
    const items = [
      {
        src: carouselData[0],
        altText: 'Sierra Nevada Mountains',
        caption: 'Be Wild!',
        header: 'Sierra Nevada Mountains'
      },
      {
        src: carouselData[1],
        altText: 'macbook',
        caption: 'Be slick. Buy Mac',
        header: 'Macs > PC?'
      },
      {
        src: carouselData[2],
        altText: 'trees',
        caption: 'Big Sur',
        header: 'Outdoor Adventures!'
      },
      {
        src: carouselData[3],
        altText: 'turn table',
        caption: 'Slick & Retro or Stale Fad?',
        header: 'Record Players Making a Comeback!'
      }
    ]
    return (
      <div className='content-container'>
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <UncontrolledCarousel items={items} />
        <Cards cards={this.filterCards()} />
      </div>
    )
  }
}

UncontrolledCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool, // default: true
  controls: PropTypes.bool, // default: true
  autoPlay: PropTypes.bool // default: true
}
