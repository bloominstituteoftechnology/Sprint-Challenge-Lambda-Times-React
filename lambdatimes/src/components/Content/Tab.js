import React from 'react';

class Tab extends React.Component {
  /*  Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      // tabClass = () => {
      //   if(props.selectedTab === props.tab) {
      //     return 'tab active-tab'
      //   }
      //   else {
      //     return 'tab'
      //   }
      // }

      selectTabHandler = () =>
      {
        this.props.selectTabHandler(this.props.tab)
      }
  
    
  render() {
    return (
      <div
        className={this.props.selectedTab === this.props.tab ? 'tab active-tab' : 'tab'}
        onClick={this.selectTabHandler}
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
    };
}

// Make sure you include PropTypes on your props.

export default Tab;

/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */