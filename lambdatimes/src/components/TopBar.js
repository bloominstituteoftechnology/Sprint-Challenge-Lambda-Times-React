import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const TopBarWrapper = styled.div`
  width: 100%;
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
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const ContainerLeft = styled.div`  
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const MenuItem = styled.span`
  cursor: pointer;
  font-weight: ${props=> props.left ? 'bold': 'regular'};
  margin-right: ${props=> {
      if (props.left){
        return '25%';
      } else if (props.center){
        return '5%';
      } else return '0'
    }
  };
  &:hover {
    ${props => props.center || props.right ? 'text-decoration: underline': 'text-decoration: none'};
  }

`

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <ContainerLeft>
          <MenuItem left>TOPICS</MenuItem><MenuItem left>SEARCH</MenuItem>
        </ContainerLeft>
        <ContainerCenter>
          <MenuItem center>GENERAL</MenuItem><MenuItem center>BROWNBAG</MenuItem><MenuItem center>RANDOM</MenuItem><MenuItem center>MUSIC</MenuItem><MenuItem right>ANNOUNCEMENTS</MenuItem>
        </ContainerCenter>
        <ContainerRight>
          <MenuItem>LOG IN</MenuItem>
        </ContainerRight>
      </TopBarContainer>
    </TopBarWrapper>
  )
}

export default TopBar;