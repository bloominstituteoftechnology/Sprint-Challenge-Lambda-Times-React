import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
let className="";
if(props.tab===props.selectedTab){
  className='tab active-tab';
}else{
  className='tab';
}
  return (
    <div
      className={className}
      onClick={() => {
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  card: PropTypes.shape({
    tab: PropTypes.string,
    selectedTab: PropTypes.string
  })
};


export default Tab;
