import React, { Component } from 'react';
import '../../CSS/index.css'
/* const Tab = props => { */
class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabMatch: false,
      selected: this.props.selectedTab
    };
    console.log(this.state)
  }
  /* const Tab = props => { */
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
 /*  selectTabHandler = keyIndex => {
 
  const newTab = this.props.tab;
  

} */
    

  render() {
    let classNames = require('classnames');

let tabMatch = false;

    if (this.props.tab === this.state.selected) {
      this.setState = ({ tabMatch: true })
      tabMatch = true;
     
    };

    let tabClass = classNames({
      tab: true,
      'active-tab': tabMatch
    })


    return (
      <div
        className={tabClass}
        onClick={() => this.props.changeSelected(this.props.tab)}


          /* Replace this dummy click handler function with your selectTabHandler function from props 
           you'll need to pass the `tab` in as an argument to this handler. */
       
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  };
}
// Make sure you include PropTypes on your props.

export default Tab;
