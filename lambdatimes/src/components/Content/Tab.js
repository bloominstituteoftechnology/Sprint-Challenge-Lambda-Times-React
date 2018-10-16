import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
  if they match, the className should be: 'tab active-tab', 
  if it is not it should just be 'tab'*/
  
  console.log(props.tab === props.selectedTab);
  // console.log(isSelected);
  console.log('I am ', props.tab);
  return (
    <div//       color: '#fff',//       backgroundColor: '#333',
      style={ props.tab === props.selectedTab ? { color: '#333', backgroundColor: '#fff', border: '2px solid #333', padding: '2px 10px' } : { color: '#fff', backgroundColor: '#333', padding: '2px 10px' } }
      // { { backgroundColor: props.selectedTab ? '#333' : '#fff' } }}
//     // style={props.tab === props.selectedTab ? selectedTabClass : notSelected}
//     className={props.tab === props.selectedTab ? selectedTabClass : notSelected}
      // style={color:{props.tab === props.selectedTab ? '#fff' : '#333'}};
      // className={props.tab === props.selectedTab ? selectedTabClass : notSelected}
      onClick={() => {props.selectTabHandler(props.tab) }}>
      
      {props.tab.toUpperCase()}
      </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;
