import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        <span className="cardtabstitle">ES8</span>
        <span className="cardtabstitle">Type Correction</span>
        <span className="cardtabstitle">Bootstrap 5</span>
        <span className="cardtabstitle">AI</span>
        <span className="cardtabstitle">History of JavaScript</span>
        <span className="cardtabstitle">UI Frameworks</span>
        <span className="cardtabstitle">Node JS</span>
        <span className="cardtabstitle">MongoDB</span>
        <span className="cardtabstitle">React.js</span>
        <span className="cardtabstitle">AR or VR</span>
        <span className="cardtabstitle">When to Rest</span>
        <span className="cardtabstitle">Typescript</span>
        <span className="cardtabstitle">Quantum Computing</span>
        <span className="cardtabstitle">React vs Angular</span>
        <span className="cardtabstitle">New Boostrap</span>

        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
