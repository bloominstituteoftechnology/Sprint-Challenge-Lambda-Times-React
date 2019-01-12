import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styled from 'styled-components';

const TabsStyles = styled.div`
 border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  .topics {
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;

  .title {
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
}
}

`

const Tabs = props => {

  return (
    <TabsStyles>
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        <div>
          {props.tabs.map((tab) => 
              <Tab
                key={tab}
                tab={tab}
                value={props.value}
                filterCards={props.filterCards}
                //selectedTabHandler={props.selectedTabHandler}
              />
            )
          }
        </div>
      </div>
    </TabsStyles>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  //selectedTabHandler: PropTypes.func
};

export default Tabs;