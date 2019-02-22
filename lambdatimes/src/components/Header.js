import React from 'react';
import{
  StyledHeader,
  StyledHeaderText
} from './TopStyling'
import moment from 'moment'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderText timeStamp>{moment().format('MMM DD YYYY, h:mm A')}</StyledHeaderText>
      <h1>Lambda Times</h1>
      <StyledHeaderText temp>98°</StyledHeaderText>
    </StyledHeader>
  )
}

export default Header