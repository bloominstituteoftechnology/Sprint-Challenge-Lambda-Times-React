import React from 'react';

const Tab = props => {
console.log (props);
let classname = '';
  if(props.tab===props.selectedTab){
  classname = 'tab active-tab';
  } else{
    classname = 'tab';
  }

  return (
    <div
      className={`${classname}`}
      onClick={(tab) => {
      props.selectTabHandler(tab.target)
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
