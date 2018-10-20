import React from 'react';
import PropTypes from 'prop-types';


  
class Tab extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tab: '',
    }
  }

  componentDidMount(){
    this.setState({tab: this.props.selectedProp})
  }

  
  // Question: is this conditional structured correctly? is there a shorter way to write this?
  render(){
      return (
        <div
          className={this.props.selectedProp === this.props.selectedTab ? 'tab' : 'tab active-tab'}
          onClick={() => this.props.selectTabHandler(this.state.tab)}
            /* Replace this dummy click handler function with your selectTabHandler function from props 
             you'll need to pass the `tab` in as an argument to this handler. */
        >
          {this.props.selectedProp.toUpperCase()} 
        </div>
      ) 
  }
}
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/


// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
}

export default Tab;
