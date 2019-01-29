import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
      if(props.tab===props.selectedTab) {
        this.className='tab active-tab';
      } else {
        this.className='tab';
      }

      return (
     <div
     className={'tab'}
      onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
</div>
      )}

Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
};
export default Tab;
