import React from 'react';
import PropTypes from 'prop-types';
import {TabStyle, SelectedTab} from '../StyledComponents';

const Tab = props => {
  return (
  <TabStyle selected={props.tab === props.selectedTab ? true : false }
    onClick={() => { props.selectTabHandler(props.tab) }}
  >
    {props.tab.toUpperCase()}
  </TabStyle>
  )
}

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}

export default Tab;


