import styled from 'styled-components';

export const TopBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

export const TopBarContainer = styled.div`
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

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

export const ContaianerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

export const TopBarText = styled.span`
  ${props => (props.center ? `
    cursor: pointer;
    margin-right: 5%;
    &:lastChild {
      margin-right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  ` : null)}
  ${props => (props.left ? `
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  ` : null)}
  ${props => (props.right ? `
    cursor: pointer;
  ` : null)}
`
    // I think this is the way to change styles based on context.
    // ${ContainerCenter} {
    // }
    // ${ContainerLeft} {
    // }
    // ${ContaianerRight} {
    // }