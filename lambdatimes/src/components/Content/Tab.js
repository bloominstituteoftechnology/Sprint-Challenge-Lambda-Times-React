import React from 'react';
import PropTypes from 'prop-types'


const Tab = props => {
  return (
    <div
      className={props.selectedTab===props.tab?'tab active-tab':'tab'}
      onClick={() => {
        props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes={
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;
