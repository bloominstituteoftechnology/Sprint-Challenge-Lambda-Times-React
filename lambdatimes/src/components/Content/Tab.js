import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const onTabSelected = 'tab active-tab';
  const allTabSelected = 'tab';

  return (
    <div
      className={props.tab === props.selectedTab ? onTabSelected : allTabSelected}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.func,
  selectTabHandler: PropTypes.string
}

export default Tab;
