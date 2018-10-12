import React from 'react';
//import {bones, fido, max, puppers , sir} from '.../assets/carousel'
import styled from 'styled-components';

const Carddiv = styled.div`
    padding: 7px 12px;
    margin: 8px;
    border: none;
    background : black;
    color: white;
    font-weight : bold;
`;

const Headlinediv = styled.div``;

const Authordiv = styled.div``;

const ImgContainerdiv = styled.div ``;


const Card = props => {
  console.log("In Card-component : ",props);
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */props.cardToDisplay.headline}</div>
      <div className="author">
        <div className="img-container">
          <img alt = "image" src={props.cardToDisplay.img /* image source goes here */} />
        </div>
        <span>By {/* author goes here */props.cardToDisplay.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;


