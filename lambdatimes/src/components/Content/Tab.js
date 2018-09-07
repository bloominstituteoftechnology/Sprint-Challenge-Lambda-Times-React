import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
      // props.selectedTab === props.tab
      // ? let className = 'tab active-tab'
      // : let className = 'tab'
      console.log(props.selectedTab);
      console.log(props.tab);
      if (props.selectedTab === props.tab){let selected = 'tab active-tab'; console.log('truthy', 'className:', selected);}
      else {let selected = 'tab'; console.log('falsy', 'className:', selected);}


  return (
    <div
      className={this.selected}
      onClick={(tab) => {
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectedTabHandler(props.tab);
      }}
    >{this.selected}
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selected: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
}

export default Tab;
