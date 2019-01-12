import React from 'react';
import PropTypes  from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      if(props.tab===props.mySelectedTab) {
          return (
              <div
                  className={'tab active-tab'}

                  onClick={() => {
                      /* Replace this dummy click handler function with your selectTabHandler function
                      from props
                       you'll need to pass the `tab` in as an argument to this handler. */
                      props.myTabHandler(props.tab)

                  }}
              >
                  {props.tab.toUpperCase()}
              </div>
          );
      } else {
          return (
              <div
                  className={'tab'}

                  onClick={() => {
                      /* Replace this dummy click handler function with your selectTabHandler function from props
                       you'll need to pass the `tab` in as an argument to this handler. */
                      props.myTabHandler(props.tab)
                  }}
              >
                  {props.tab.toUpperCase()}
              </div>
          );
      }
};

Tab.propTypes={
    tab:PropTypes.string
}

// Make sure you include PropTypes on your props.

export default Tab;
