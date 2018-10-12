import React from 'react';
import styled from 'styled-components';

const Topbardiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`;

const Containerdiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
`;

const ContainerLeftdiv = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`;

const ContainerCenterdiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`;

const ContainerRightdiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`;


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Topbardiv>
      <Containerdiv>
        <ContainerLeftdiv>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeftdiv>
        <ContainerCenterdiv>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenterdiv>
        <ContainerRightdiv>
          <span>LOG IN</span>
        </ContainerRightdiv>
      </Containerdiv>
    </Topbardiv>
  )
}

export default TopBar;