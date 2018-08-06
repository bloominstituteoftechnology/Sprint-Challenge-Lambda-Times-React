import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabS=styled.div`
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
const Topics=styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  `
const Title=styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <TabS>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map((e,i)=><Tab tab={e} key={i} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}/>)}
      </Topics>
    </TabS>
  )
}
Tabs.propTypes={
  tabs: PropTypes.array.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}
// Make sure to use PropTypes to validate your types!
export default Tabs