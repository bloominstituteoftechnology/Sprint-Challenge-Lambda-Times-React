import React from 'react';

class Tab extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tabClass: ''
    }
    if (this.props.tab === this.props.selectedTab) {
      this.setState({tabClass: 'tab active-tab'})
    } else {
      this.setState({tabClass: 'tab'})
    }

  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  render(){
    return (
      <div
        
        className={`${this.state.tabClass} ${this.props.tab}`}
        // onClick={() => {
          /* Replace this dummy click handler function with your selectTabHandler function from props 
           you'll need to pass the `tab` in as an argument to this handler. */
        // }}
        onClick={this.props.selectTabHandler}
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }
  
};

// Make sure you include PropTypes on your props.

export default Tab;
