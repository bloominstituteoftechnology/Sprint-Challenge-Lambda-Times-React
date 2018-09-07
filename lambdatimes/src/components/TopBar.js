import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Tpbr = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Ctnr = styled.div`
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

const Lftctnr = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const Lftspn = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const Ctrctnr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const Ctrspn = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Rgtctnr = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const Rgtspn = styled.span`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Tpbr>
      <Ctnr>
        <Lftctnr>
          <Lftspn>TOPICS</Lftspn><Lftspn>SEARCH</Lftspn>
        </Lftctnr>
        <Ctrctnr>
          <Ctrspn>GENERAL</Ctrspn><Ctrspn>BROWNBAG</Ctrspn><Ctrspn>RANDOM</Ctrspn><Ctrspn>MUSIC</Ctrspn><Ctrspn>ANNOUNCEMENTS</Ctrspn>
        </Ctrctnr>
        <Rgtctnr>
          <Rgtspn>LOG IN</Rgtspn>
        </Rgtctnr>
      </Ctnr>
    </Tpbr>
  )
}

export default TopBar;