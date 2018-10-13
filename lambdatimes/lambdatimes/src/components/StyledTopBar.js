import styled from 'styled-components';

export const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
      color: red;
    }
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

export const StyledContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

export const StyledContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

export const StyledContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

export const StyledLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  &:last-child: margin-right: 0;
  &:hover: text-decoration: underline;
`;

export const StyledCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

export const StyledRightSpan = styled.span`
  cursor: pointer;
`;