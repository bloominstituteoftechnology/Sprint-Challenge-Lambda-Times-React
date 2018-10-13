import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
   console.log(props.tab)

   const Active = props.tab === props.selectedTab;
  return (

    <div
      className={`tab ${Active ? 'active-tab' : ''}`}
      onClick={props.changeSelected}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Included PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
};

export default Tab;