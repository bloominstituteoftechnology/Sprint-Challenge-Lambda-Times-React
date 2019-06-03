import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardStyle = styled.div `
     border: 2px solid blue
     border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;`



const HeadlineStyle = styled.div `
font-size: 25px;
font-family: Didot, serif`

    const ImgStyle  = styled.div
    `  padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
          
         img {
           width: 40px;
         }`
   

const Card = props => {
  return (
    <CardStyle> 
     <HeadlineStyle>{props.theStuff.headline}</HeadlineStyle> 
      <div className="author">
        {props.theStuff.tab}
        <ImgStyle>
        <img src={props.theStuff.img} />
</ImgStyle>
          
        <span>By  {props.theStuff.author}}</span>
      </div>
</CardStyle>  );
};

// Make sure to include PropTypes.

export default Card;
