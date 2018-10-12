import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
      let selection = props.changeSelectedTab(props.tab)
  return (
    <div
      className={props.selected === props.tab ? 'tab active-tab' : 'tab'}
      onClick={selection}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selected: PropTypes.string.isRequired,
  changeSelectedTab: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
}
export default Tab;
