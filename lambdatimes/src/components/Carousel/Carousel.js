import React, { Component } from 'react'
import { carouselData } from '../../data'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      selected: 0
    }
  }
  componentDidMount() {
    this.setState({ images: carouselData })
  }

  leftClick = () => {
    const { images, selected } = this.state
    this.setState({
      selected: selected === 0 ? images.length - 1 : selected - 1
    })
  }

  rightClick = () => {
    const { images, selected } = this.state
    this.setState({
      selected: selected === images.length - 1 ? 0 : selected + 1
    })
  }

  selectedImage = () => {
    const { images, selected } = this.state
    return (
      <img src={images[selected]} style={{ display: 'block' }} alt="carousel" />
    )
  }

  render() {
    const { leftClick, rightClick, selectedImage } = this

    return (
      <div className="carousel">
        <div className="left-button" onClick={leftClick}>
          {'<'}
        </div>
        {selectedImage()}
        <div className="right-button" onClick={rightClick}>
          {'>'}
        </div>
      </div>
    )
  }
}
