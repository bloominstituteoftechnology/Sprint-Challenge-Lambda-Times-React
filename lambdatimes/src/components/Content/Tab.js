import React from 'react';
import PropTypes from 'prop-types'


const Tab = props => {
      if(props.tab === props.selectedTab) {
        this.className='tab active-tab';
      } else {
        this.className='tab';
    }

     return (
     <div className={'tab'} onClick={() => this.props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
     </div>
      )}


// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  selectTabHandler: PropTypes.string
};
export default Tab;
