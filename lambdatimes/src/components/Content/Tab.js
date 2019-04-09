import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  if(props.selectedTab === props.tab){
    return <div className={'tab active-tab'}>{props.tab.toUpperCase()}</div>};
  return (
    <div
      className={'tab'} onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler:PropTypes.func
}

export default Tab;
