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

  /***** Top Bar *****/

  ${props =>
    props.topBar
      ? `
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: none;
        flex-direction: row;
        position: fixed;
        height: 44px;
        background-color: #333;
       
        `
      : null};

  ${props =>
    props.tbContainer
      ? `
        width: 100%;
        display: flex;
        justify-content: none;
        align-items: none;
        flex-direction: row;
        color: #fff;
        letter-spacing: 1px;
        padding: 0 10px;
        max-width: 1280px;
       
        `
      : null};

  ${props =>
    props.tbContainerLeft
      ? `
            display: flex;
            justify-content: none;
            align-items: center;
            flex-direction: row;
            flex: 1;
            font-size: 11px;
           
            `
      : null};
  ${props =>
    props.tbContainerCenter
      ? `
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          flex: 3;
          font-size: 9px;
               
                `
      : null};
  ${props =>
    props.tbContainerRight
      ? `
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-direction: row;
          flex: 1;
          font-size: 11px;
          font-weight: bold;
                   
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
  ${props =>
    props.tbContainerLeftSpan
      ? `
          cursor: pointer;
          margin-right: 25%;
          font-weight: bold;
        `
      : null};

  ${props =>
    props.tbContainerCenterSpan
      ? `
            cursor: pointer;
            margin-right: 5%;
            `
      : null};

  ${props =>
    props.tbContainerCenterSpanLast
      ? `
            cursor: pointer;
            margin-right: 0;
            `
      : null};

  ${props =>
    props.tbContainerRightSpan
      ? `
            cursor: pointer;      
            `
      : null};
`;
