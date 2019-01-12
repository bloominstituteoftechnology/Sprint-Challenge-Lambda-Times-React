import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarMain>
      <TopBarContainer>
        <TopBarInnerContent left>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarInnerContent>
        <TopBarInnerContent center>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarInnerContent>
        <TopBarInnerContent right>
          <span>LOG IN</span>
        </TopBarInnerContent>
      </TopBarContainer>
    </TopBarMain>
  )
}

const TopBarMain = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const TopBarInnerContent = styled.div`
  display: flex;
  justify-content: ${props => {
                                if(props.left) {
                                  return 'none'
                                } else if (props.center) {
                                  return 'center'
                                } else {
                                  return 'flex-end'
                                }
                              }};
  align-items: center;
  flex-direction: row;

  flex: ${props => props.center ? '3' : '1'}
  font-size: ${props => props.center ? '9px' : '11px'}
  font-weight: ${props => props.right ? 'bold' : 'inherit'}

  span {
    cursor: pointer;
    margin-right: ${props => {  if(props.left) {
                                    return '25%'
                                  } else if (props.center) {
                                    return '5%'
                                  } else {
                                    return '0'
                                  }
                                }};
    font-weight: ${props => props.left ? 'bold' : 'none'}
  }

  span:hover {
    text-decoration: ${props => props.center ? 'underline' : 'none'}
  }

  span:last-child {
    margin-right: ${props => props.center ? '0' : 'inherit'};
  }
`;

export default TopBar;
