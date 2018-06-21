import React, { Component } from 'react';
import Card from './Card'

export default class Cards extends Component {
  render(){
    const { cards } = this.props
    return (
      <div className="cards-container">
        { cards.map( (article, i) => {
          return <Card article={article} key={i} />
        })}
      </div>
    )
  }
}