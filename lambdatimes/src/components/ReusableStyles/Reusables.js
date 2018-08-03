import Styled from 'styled-components';

export const HeaderSpan = Styled.span`
align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  flex: 1;
  margin-left: ${props => props.date ? '25px' : '0'}
  margin-right: ${props => props.temp ? '25px' : '0'}
  text-align: ${props => props.temp ? 'right' : 'none'}

`;

export const InnerContainer = Styled.div`
display: flex;
justify-content: ${props => 
    {if (props.left){
    return 'none'}
if (props.center) {
    return 'center'
} else {
    return 'flex-end'}
}};
align-items: center;
flex-direction: row;
flex: ${props => props.center ? '3' : '1' } 
font-size: ${props => props.center ? '9px' : '11px'};
font-weight: ${props=> props.right ? 'bold' : 'none'};
`;

