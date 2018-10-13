import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
  const tabClassName = (props.tab === props.selectedTab) ? 'tab active-tab' : 'tab';

  const clickHandler = () =>{
    props.selectTabHandler(props.tab);
  }
  return (
    <div
      className={tabClassName}
      // onClick={() => {
      //   /* Replace this dummy click handler function with your selectTabHandler function from props
      //    you'll need to pass the `tab` in as an argument to this handler. */
      // }}
      onClick={clickHandler}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.Proptypes = {
  tab: PropTypes.Array,
  selectedTab: PropTypes.string

}

export default Tab;
