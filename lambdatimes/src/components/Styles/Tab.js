import styled from 'styled-components';

const TabStyle = styled.section `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => props.color};
  background-color: ${props => props.background};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  border: ${props => props.border}
  &:hover {
    text-decoration: underline;
  }
`;

export  default TabStyle;