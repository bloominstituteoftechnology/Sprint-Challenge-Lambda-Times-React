import React from 'react';
import './Tab.css'
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return <h2 onClick={props.changeSelected} className="tab">{props.propsinTab.toUpperCase()}</h2>

};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  propsinTab: PropTypes.array.isRequired
}
export default Tab;




// <div
// className={''}
// onClick={() => {
//   Replace this dummy click handler function with your selectTabHandler function from props 
//    you'll need to pass the `tab` in as an argument to this handler.
// }}
// >
// {props.tab.toUpperCase()}
// </div>
// );
