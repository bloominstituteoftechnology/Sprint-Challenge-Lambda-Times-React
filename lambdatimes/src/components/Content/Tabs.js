import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledTabs = styled.div  `

  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-evenly ;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`

const Topics = styled.div `

 font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`
const Title = styled.div `
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  display: flex ;

`
const Tabs = props => {


  return (
    // <div className="tabs">

    <StyledTabs>
    <Topics>
          {/* <div className="topics"> */}
          <Title>
            TRENDING TOPICS:
          </Title>

        {props.tabs.map((tab, index) =>
        
        <Tab selectTab={props.selectTabHandler} key={index} tab={tab}

        /> 
         
        )}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      {/* </div> */}
    </Topics>
    
    </StyledTabs>
    
    // </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string)
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
