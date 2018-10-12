import styled from 'styled-components';

export const StyledHeader = styled.header`
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
    width: 1280px
`;

export const HeaderTitle = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

export const HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: ${props => (props.date ? '25px' : null)};
  flex: ${props => (props.flex ? '1' : null)};
  text-align: ${props => (props.temp ? 'right' : null)};
  margin-right: ${props => (props.temp ? '25px' : null)};
`;
// .header span {
//   align - self: flex - end;
//   font - size: 11px;
//   font - weight: bold;
//   letter - spacing: 1px;
// }
// .header.date {
//   margin - left: 25px;
//   flex: 1;
// }
// .header.temp {
//   text - align: right;
//   margin - right: 25px;
//   flex: 1;
// }
