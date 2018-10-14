import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <button className={''} onClick={props.onClick}>
      {props.tab.toUpperCase()}
    </button>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
}

export default Tab;
