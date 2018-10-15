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
    console.log(this.props.selectedProp)
  }

  

  render(){
    console.log(this.props.selectTabHandler)
    if (this.props.selectedProp === this.props.selectedTab) {
      return (
        <div
          className={'tab active-tab'}
          onClick={this.props.selectTabHandler}
            /* Replace this dummy click handler function with your selectTabHandler function from props 
             you'll need to pass the `tab` in as an argument to this handler. */
        >
          {this.props.selectedProp} 
        </div>
      ) 
    } else {
      return (
        <div
        className={'tab'}
        onClick={this.props.selectTabHandler}
          /* Replace this dummy click handler function with your selectTabHandler function from props 
           you'll need to pass the `tab` in as an argument to this handler. */
      >
        {this.props.selectedProp} 
      </div>
      )
    }
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
