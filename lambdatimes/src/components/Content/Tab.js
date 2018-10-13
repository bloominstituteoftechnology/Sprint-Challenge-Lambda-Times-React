import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

// Styled components:
const TabWrapper = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }

  ${props => (props.selectedTab === props.tab ? `
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  ` : null )}
`;

// Props taken in:
  // - tab: ""
  // - selectedTab: "all"
  // - selectTabHandler: fn()

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const tabClass = props.selectedTab === props.tab ? "tab active-tab" : "tab";

  const tabHandler = () => {
    props.selectTabHandler(props.tab);
  };

  return (
    <TabWrapper
      onClick={tabHandler}
    >
      {props.tab.toUpperCase()}
    </TabWrapper>
  );
};

// Make sure you include PropTypes on your props.
Tab.defaultProps = {
  selectedTab: 'all'
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};
export default Tab;
