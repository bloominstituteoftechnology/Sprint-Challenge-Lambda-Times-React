import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";


const Tabs = props => {
  const{tabs, selected, selectTabHandler}=props
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
              
        {tabs.map((tab,i)=>{
          return<Tab selectTabHandler={selectTabHandler}selected={selected===tab}
          key={i}tab={tab}/>
         }) }
        </div>
        </div>    
              
    
  )
      }

Tabs.propTypes={
  tabs: PropTypes.array,
  selectTabHandler: PropTypes.func,
  selectedTab:PropTypes.string,
}

export default Tabs;
