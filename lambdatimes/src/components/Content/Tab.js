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
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    return (
    <TabStyle active onClick={props.selectedTabHandler}
        /* Replace this dummy click handler function with your selectTabHandler function 
        from props. You'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tab.toUpperCase()}
    </TabStyle>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.function
};

export default Tab;
