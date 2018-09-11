import styled from 'styled-components';

//Header Styles
export const HeaderWrapper = styled.div`
  width: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  }
  @media (min-width: 1300px) {
    width: 1300px;
  }
`;


export const HeaderText = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;



`;

export const Date = styled.span`
  align-self: flex-end;
  font-size: 16px;
  font-weight: bold;
  margin-left: 25px;
  font-family: Didot, serif;
`;
export const Temp = styled.span`
  align-self: flex-end;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;