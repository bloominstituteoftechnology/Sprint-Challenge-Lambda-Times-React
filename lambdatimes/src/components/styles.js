import styled from 'styled-components';

export const HeaderWrap = styled.div`
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
`
export const HeaderText = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: ${props => props.right ? '0' : '25px'};
  margin-right: ${props => props.right ? '25px' : '0'};
  flex: 1;
  text-align: ${props => props.right ? 'right' : 'initial'}
`
export const HeaderName = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
export const TopbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
export const TopbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
  width: 1280px;
  }
`
export const TopbarInner = styled.div`
  display: flex;
  justify-content: ${props => props.center ? 'center' : props.right ? 'flex-end' : 'none'};
  align-items: center;
  flex-direction: row;
  flex: ${props => props.center ? '3' : '1'};
  font-size: ${props => props.center ? '9px' : '11px'};
  font-weight: ${props => props.right ? 'bold' : 'normal'};
`
export const TopbarInnerContent = styled.span`
  cursor: pointer;
  margin-right: ${props => props.center ? '5%' : props.left ? '25%' : 'inherit'};
  font-weight: ${props => props.right ? 'bold' : 'normal'};

  &:last-child {
    margin-right: ${props => props.center && '0'};
  }

  &:hover {
    text-decoration: ${props => props.center && 'underline'};
  }
`
