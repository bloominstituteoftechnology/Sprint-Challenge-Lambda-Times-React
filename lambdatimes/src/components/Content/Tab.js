import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const TopicsTab = Styled.div`
  &:hover {text-decoration: underline;}
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
`;
const TopicsTabSelected = Styled.div`
  &:hover {text-decoration: underline;}
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;
const Tab = props => {
    let tabs = '';
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
      if (props.selectedTab === props.tab) {
        return (
          <TopicsTabSelected
            className={tabs}
            onClick={() => {
              /* Replace this dummy click handler function with your selectTabHandler function from props
               you'll need to pass the `tab` in as an argument to this handler. */
               return props.selectTabHandler(props.tab);
            }}
          >
            {props.tab.toUpperCase()}
          </TopicsTabSelected>
        )
      }
      else {
        return (
          <TopicsTab
            className={tabs}
            onClick={() => {
              /* Replace this dummy click handler function with your selectTabHandler function from props
               you'll need to pass the `tab` in as an argument to this handler. */
               return props.selectTabHandler(props.tab);
            }}
          >
            {props.tab.toUpperCase()}
          </TopicsTab>
        );
      }

};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
}
export default Tab;
