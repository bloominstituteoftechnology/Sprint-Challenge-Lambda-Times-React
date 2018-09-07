import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const TabStyle = styled.div`
  display: flex;

  ${props => props.active
    ? css`border: 1px solid red`
    : null
  }
`;

const Tab = props => {
  console.log(props.value);
  console.log(props.tab);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    return (
    <TabStyle 
    onClick={() => props.selectedTabHandler()}
    onClick={() => props.filterCards()}
    name = "selected"
    value = {props.tab}
    >
      {props.tab.toUpperCase()}
    </TabStyle>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  value: PropTypes.string,
  selectedTabHandler: PropTypes.func
};

export default Tab;
