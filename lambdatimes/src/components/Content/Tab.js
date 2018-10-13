import React from 'react';
import PropTypes from 'prop-types';

import { TabItem } from '../Styles/Styles';
import { TabActive } from '../Styles/Styles';

const Tab = props => {
  if (props.tab === props.selected) {
    return (
      <TabActive>
        {props.tab.toUpperCase()}
      </TabActive>
    )
  }
  return (
    <TabItem onClick={(event) => {props.changeSelected(event, props.tab)}}>
      {props.tab.toUpperCase()}
    </TabItem>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  changeSelected: PropTypes.func,
  selected: PropTypes.string,
}


export default Tab;
