import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

  ${props => (props.type === "container" ? 
  `
  letter-spacing: 1px;
  padding: 0 10px;
  color: #fff;
 ` : null
  )}

  ${props => (props.type === "container-left" ? 
  `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
 ` : null
  )}

  ${props => (props.type === "container-left-span" ? 
  `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
 ` : null
  )}

  ${props => (props.type === "container-center" ? 
  `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
 ` : null
  )}

  ${props => (props.type === "container-center-span" ? 
  `
  cursor: pointer;
  margin-right: 5%;
 ` : null
  )}

  ${props => (props.type === "container-right" ? 
  `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
 ` : null
  )}



`;