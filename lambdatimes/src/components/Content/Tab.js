import React from 'react';
import PropTypes from 'prop-types';
import {TabBox} from '../../CSS/ReusableStyles';

// props: key={i} tab={tab} selectedTab={props.selectedTab} handleSelect={props.handleSelect}
const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  return (
    <TabBox>
    <div
      className={props.selectedTab}
      value={props.tab}
      onClick={() => {props.handleSelect()}}
    >
      {props.tab.toUpperCase()}
    </div>
    </TabBox>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;