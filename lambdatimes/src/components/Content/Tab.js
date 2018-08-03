import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const SelectedTab = styled(StyledTab)`
  background: #fff;
  color: #333;
  border: 2px solid #333;
`;

const Tab = props => {
  const currentTab = () => {
      if (props.selected === props.tab) {
        return (
          <StyledTab
            onClick={() => props.selectTabHandler(props.tab)}
          >
            {props.tab.toUpperCase()}
          </StyledTab>
        );
      } else {
        return (
          <SelectedTab 
            onClick={() => props.selectTabHandler(props.tab)}
          >
            {props.tab.toUpperCase()}
          </SelectedTab>
        );
      }
  }
  
  return (
    <div>
      {currentTab()}
    </div>
  );
}

Tab.propTypes = {
  tab: PropTypes.string,
  selected: PropTypes.string,
  selectTabHandler: PropTypes.func,
};

export default Tab;