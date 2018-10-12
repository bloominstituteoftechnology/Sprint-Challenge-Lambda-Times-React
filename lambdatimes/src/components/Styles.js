import styled from 'styled-components';

const Header = styled.div`
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

`;

const Span= styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;

    ${props => (props.type === 'date' ? `margin-left: 25px; flex: 1;` : null)}
    ${props => (props.type === 'temp' ? `text-align: right; margin-right: 25px; flex: 1;` : null)}
 `;

export {
    Header,
    Span
}