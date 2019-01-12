import styled from 'styled-components';

export const TopBarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const TBContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

export const TBLContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

export const TBLContainerContent = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

export const TBLContainerContentCenter = styled.div`
  span {
    cursor: pointer;
    margin-right: 5%;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TBRContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Span = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const Date = styled(Span)`
  margin-left: 25px;
  flex: 1;
`;

export const Temp = styled(Span)`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;
