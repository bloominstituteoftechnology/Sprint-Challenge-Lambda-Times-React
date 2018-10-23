import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const tabChange = props.tab
  return (
   <div onClick={() => {props.selectTab(tabChange)}}>
    {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tabObject: PropTypes.shape({
    tab: PropTypes.string.isRequired
    
  })
}
// Make sure you include PropTypes on your props.

export default Tab;