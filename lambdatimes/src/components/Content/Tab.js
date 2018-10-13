import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabDiv
      className={''}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </TabDiv>
  );
};


Tab.propTypes = {
  selectTabHandler: PropTypes.func
}

const TabDiv = styled.div`
  margin: 0 5px;
  cursor: pointer;
`

export default Tab;


// () => props.selectTabHandler(props.selectedTab)