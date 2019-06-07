import React, { Component } from 'react';

import Content from "../Content/Content"
import Tabs from "./Tabs";
import Cards from "./Cards";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headliine}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
