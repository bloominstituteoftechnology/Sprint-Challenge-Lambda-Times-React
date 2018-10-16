
import React, { Component } from 'react';
import PropTypes from "prop-types";

const Tab = props => {
  return (
    <div
      className='tab'
    >
      {props.tabs}
    </div>)
  }

// class Tab extends Component {
//
//   render(){
//     const index = this.props.index;
//     const tabs = this.props.tabs;
//
//   /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
//
//       if they match, the className should be: 'tab active-tab',
//       if it is not it should just be 'tab'*/
//   return (
//     <div
//     className={"tab"}
//
//       // onClick={(selectTabHandler(tabs)) => {
//       //       props.selectedTabHandler(props.tab);
//         /* Replace this dummy click handler function with your selectTabHandler function from props
//          you'll need to pass the `tab` in as an argument to this handler. */
//       // }}
//     >
// {tabs}
//     </div>
//   );
// }};
//
// Tab.propTypes = {
//
// }
//
// // Make sure you include PropTypes on your props.
//
export default Tab;
