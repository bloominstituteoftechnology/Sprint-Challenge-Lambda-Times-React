import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Passed as Props from Content.js
  tabs={this.state.tabs}
  selectedTab={this.state.selected} 
  selectedTabHandler={this.changeSelected}
*/

const TabsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  }
  @media (min-width: 1280px) {
  .tabs {
    width: 1280px;
  }

  ${props => (props.type === 'topics' ? `
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;` : null)};
`

const Span = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`




const Tabs = props => {
  return (
    <TabsContainer>
      <TabsContainer type="topics">
        <Span type="title">TRENDING TOPICS:</Span>

        {/* Maps over the tabs array and returns a tab component for each with a unique key identifier using the index */}
        {props.tabs.map( (t, i) => <Tab key={i} tab={t} selectedTab={props.selectedTab} selectedTabHandler={props.selectedTabHandler} /> )}

      </TabsContainer>
    </TabsContainer>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.array
};

export default Tabs;

