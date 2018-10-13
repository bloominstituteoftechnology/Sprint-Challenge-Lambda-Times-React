import React, { Component } from 'react';
import '../../CSS/index.css'
/* const Tab = props => { */
  class Tab extends Component {
    constructor(props) {
      super(props);
      this.state = {
         tabMatch: false,
        selected: props.selectedTab
      };
      console.log(this.state)
    }
  /* const Tab = props => { */
    /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
        if they match, the className should be: 'tab active-tab', 
        if it is not it should just be 'tab'*/
  
  
  
        render (){
          let classNames = require('classnames');
          console.log(this.props.tab)
  
  
        if (this.props.tab === this.props.selectedTab) {
         console.log(this.props.tab)
          this.setState=({ tabMatch: true})
        }
        
          let tabClass = classNames({
            tab: true,
            'active-tab': this.state.tabMatch
          })
  
  
    return (
      <div
        className={tabClass}
        onClick={() => {
          /* Replace this dummy click handler function with your selectTabHandler function from props 
           you'll need to pass the `tab` in as an argument to this handler. */
        }}
      >
       {/*  {props.tab.toUpperCase()} */}{this.props.tab}
      </div>
    );
  };
  }
  // Make sure you include PropTypes on your props.
  
  export default Tab;
  