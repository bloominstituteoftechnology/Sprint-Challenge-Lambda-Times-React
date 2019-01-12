import styled from 'styled-components';

export const TabsWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`

export const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`

export const TabsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

export const TabWrapper = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
  ${props => props.active 
    ? `
      background-color: #fff;
      color: #333;
      border: 2px solid #333;
    `
    : null
  }
`

