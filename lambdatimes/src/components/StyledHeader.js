import styled from 'styled-components';

export const StyledHeader = styled.div`
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
`;

export const StyledDate = styled.span`
  margin-left: 25px;
  flex: 1;
`;

export const StyledTitle = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;

  @media (min-width: 1280px) {
    width: 1280px;
    color: red;
  }
`;

export const StyledTemp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;
