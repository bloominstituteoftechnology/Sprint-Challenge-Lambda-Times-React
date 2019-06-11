import styled, { css } from 'styled-components';

//  Couldn't get it to render right in the given time frame.  Need 
// about 2 hours for TopBar alone, another hour for Header - I just
//  don't have the time to screw around with this

export const SpanStyle = styled.span`
margin-right: 5%;
font-size: 12px;
  `;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
 `;

 export const ContainerLeftSpan = styled.div`
 margin-right: 25%;
  font-weight: bold;
  `;

  export const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  `;

  export const ContainerRightSpan = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  `;

  export const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  width: 1280px;
  `;

  export const Top = styled.div`
  
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
  `;