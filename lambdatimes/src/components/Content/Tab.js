import React from 'react'
import propTypes from 'prop-types';
import './../../CSS/index.css';

const Tab = props => {

    const handleSelected = (e) => {
    const tab = e.target.innerHTML;
    props.changeSelected(tab);
   }
  
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      if(props.Tab === props.selectedTab){
            return (
              <div className={'tab active-tab'} onClick={handleSelected}>
                 <div>{props.selectedTab}</div>
              </div>
            );
          }

          return (
              <div className={'tab'} onClick={handleSelected}>
                {props.Tab}
              </div>
          )
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  Tab: propTypes.string,
}
export default Tab;
