import styled from "styled-components";

export const StyledDiv = styled.div`
  ${props =>
    props.header
      ? `
   
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
      max-width: 1280px;
   
    `
      : null};
`;

export const StyledSpan = styled.span`
  ${props =>
    props.date
      ? `
      align-self: flex-end;
      font-size: 11px;
      font-weight: bold;
      letter-spacing: 1px;
      margin-left: 25px;
      flex: 1;
    `
      : null};
  ${props =>
    props.temp
      ? `
          align-self: flex-end;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 1px;
          text-align: right;
          margin-right: 25px;
          flex: 1;
        `
      : null};
`;
