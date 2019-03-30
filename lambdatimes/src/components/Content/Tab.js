import React from 'react';

const Tab = props => {
      return (
        <div
          className={''}
          onClick={() => {
            props.selectTabHandler(props.tab)
          }}
        >
          <button>{props.tab.toUpperCase()}</button>
        </div>
  );
};

export default Tab;
