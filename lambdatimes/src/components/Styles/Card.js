import styled from 'styled-components';

export const CardStyle = styled.section `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

export const Headline = styled.section `
  font-size: 25px;
  font-family: Didot, serif;
`;

export const Author = styled.section `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  > span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

export const ImgContainer = styled.section `
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;

    > img {
        width: 40px;
    }
`;