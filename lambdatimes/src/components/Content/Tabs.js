import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }

  > div {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;

    > span {
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`;

const Tabs = props => {
  return (
    <StyledTabs>
      <div>
        <span>TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return <Tab key={tab}
            selectTabHandler={props.selectTabHandler} 
            selected={props.selectedTab} tab={tab} />
        })}
      </div>
    </StyledTabs>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
};

export default Tabs