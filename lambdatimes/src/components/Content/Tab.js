import React from 'react';
import PropTypes from 'prop-types' ;

class Tab extends React.Component {
  constructor(props){
    super(props);


  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  
  componentDidMount(){
    console.log('This is when Tab mounts')

  }

  componentDidUpdate(){
    console.log('This is when Tab Updates')
  }
      render(){
        console.log('This when Tab Renders');
  
  return (
    <div
      className={`tab ${this.props.selectedTab === this.props.tab ? 'active-tab' : null }`}
      onClick={() => this.props.selectTabHandler(this.props.tab)}
    >
      {this.props.tab.toUpperCase()}
    </div>
  );
};

}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tab: PropTypes.string

}

export default Tab;
