import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = props => {
  return (
    <Div1>
      <Div2>{props.card.headline}</Div2>
      <Div3>
        <Div4>
          <Img src={props.card.img} alt="user" />
        </Div4>
        <Span>By {props.card.author}</Span>
      </Div3>
    </Div1>
  )
}

const Div1 = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
const Div2 = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
const Div3 = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`
const Div4 = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
const Img = styled.img`
  width: 40px;
`
const Span = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string, 
    tab: PropTypes.string, 
    img: PropTypes.string, 
    author: PropTypes.string, 
  })
}

export default Card
