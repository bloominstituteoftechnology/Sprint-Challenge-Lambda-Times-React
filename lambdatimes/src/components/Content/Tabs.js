import React from 'react';
import Tab from './Tab';


const Tabs = props => {

  

  return (

    <div className="tabs">
      <div div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {props.tabs.map((tab, index) => {
              return(
                      <div>
                      <Tab selectedTab={props.selectedTab} Tab={tab} changeSelected={props.changeSelected} key={index}/>
                      </div>
              )
          })}
      
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
