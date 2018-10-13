import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            tabs: [],
            cards: []
        }
    }

    componentDidMount() {
        this.setState({ tabs: tabData, cards: cardData })
    }

    changeSelected = (tab) => {
        this.setState({ selected: tab })
        console.log("selected: " + this.state.selected)
    }

    filterCards = () => {
        if (this.state.selected === "all" || !this.state.selected) {
            console.log("all selected")
            return this.state.cards;
        }
        let cards = this.state.cards.slice();
        cards = cards.filter(card => (card.tab === this.state.selected));
        console.log("cards: " + cards);
        return cards;
    }

    render() {
        return (
            <div className="content-container">
                {}
                <Tabs
                    tabs={this.state.tabs}
                    selectTabHandler={this.changeSelected}
                    selectedTab={this.state.selected}
                />
                <Cards
                    cards={this.filterCards()}
                />
            </div>
        )
    }
}