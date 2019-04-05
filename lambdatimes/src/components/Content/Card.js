import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard, StyledCardHeadline, StyledCardAuthor, StyledAuthorImgContainer, StyledAuthorImg, StyledAuthorSpan } from './Styles';

const Card = props => {
 return (
   <StyledCard>
     <StyledCardHeadline>{props.card.headline}</StyledCardHeadline>
     <StyledCardAuthor>
       <StyledAuthorImgContainer>
         <StyledAuthorImg src={props.card.img} alt = 'pictures'/>
       </StyledAuthorImgContainer>
       <StyledAuthorSpan>By {props.card.author}</StyledAuthorSpan>
     </StyledCardAuthor>
   </StyledCard>
 );
};

// Make sure to include PropTypes.

Card.propTypes = {
 card: PropTypes.shape({
   headline: PropTypes.string,
   tab: PropTypes.string,
   img: PropTypes.string,
   author: PropTypes.string,
 })
}

export default Card;
