import styled from 'styled-components';

const customLayout = (justify, align) => (
  `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `
);

// TopBar
export const TopBarWrapper = styled.div`
  ${customLayout('center', 'center')}
  width: 100%;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  z-index: 1;
`;

export const TopBarContainer = styled.div`
  ${customLayout('none', 'none')}
  width: 100%;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const TBContainerLeft = styled.div`
  ${customLayout('none', 'center')}
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

export const TBContainerCenter = styled.div`
  ${customLayout('center', 'center')}
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;
  }

  span:last-child {
    margin-right: 0;
  }

  span:hover {
    text-decoration: underline;
  }
`;

export const TBContainerRight = styled.div`
  ${customLayout('flex-end', 'center')}
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;

// Header
export const HeaderWrapper = styled.div`
  ${customLayout('space-between', 'center')}
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }

  h1 {
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
  }

  span {
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

export const DateWrapper = styled.span`
  margin-left: 25px;
  flex: 1;
`;

export const TempWrapper = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;
