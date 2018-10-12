import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
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
`
const Topics = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`
const Title = Styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  console.log(props)
  return (
    <WrapperDiv>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {
          props.tabs.map(element => {
            return(<Tab 
                selectTabHandler = {props.selectTabHandler}
                    selectedTab = {props.selectedTab}
                    tab = {element}
                  />)
          })
        }
      </Topics>
    </WrapperDiv>
  );
};

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  selectTabHandler:PropTypes.func,
  tabs:PropTypes.array
}



// Make sure to use PropTypes to validate your types!
export default Tabs;
