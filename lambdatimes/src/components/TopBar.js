import React from 'react';
import styled from 'styled-components';
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  z-index: 2000;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

// the prop names below are composed of the initials of the CSS property name and the direction (left, center, right) of the container to adjust.
const DirectionalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => props.JCL || props.JCC || props.JCR}; 
  flex: ${props => props.FC || 1};
  font-size: ${props => props.FSC || '11px'};
  font-weight: ${props => props.FWR || null};
`;

// the prop names below are composed of initials of the CSS property name and the expected value of the 
const Span = styled.span`
  cursor: pointer;
  margin-right: ${props => props.MRPercent || null};
  font-weight: ${props => props.FWB || null};
  :hover {
    text-decoration: ${props => props.TDU || null };
  }
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <Container>

        <DirectionalContainer JCL="none">
          <Span MRPercent='25%' FWB='bold'>TOPICS</Span>
          <Span MRPercent='25%' FWB='bold'>SEARCH</Span>
        </DirectionalContainer>

        <DirectionalContainer JCC="center" FC="3" FSC="9px">
          <Span MRPercent="5%" TDU='underline'>GENERAL</Span>
          <Span MRPercent="5%" TDU='underline'>BROWNBAG</Span>
          <Span MRPercent="5%" TDU='underline'>RANDOM</Span>
          <Span MRPercent="5%" TDU='underline'>MUSIC</Span>
          <Span MRPercent="0" TDU='underline'>ANNOUNCEMENTS</Span>
        </DirectionalContainer>

        <DirectionalContainer JCR="flex-end" FWR="bold">
          <span>LOG IN</span>
        </DirectionalContainer>

      </Container>
    </StyledTopBar>
  )
}

export default TopBar;