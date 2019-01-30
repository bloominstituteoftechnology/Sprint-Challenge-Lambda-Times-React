import React from 'react';
import PropTypes from 'prop-types'


const Tab = props => {
  console.log(props)
      if(props.tab === props.selectedTab) {
        this.className='tab active-tab';
      } else {
        this.className='tab';
    }

     return (
     <div 
     className={'tab'} 
     onClick={() => props.filterCards(props.tab)}
     selectedTab = {props.tab}
     >
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
