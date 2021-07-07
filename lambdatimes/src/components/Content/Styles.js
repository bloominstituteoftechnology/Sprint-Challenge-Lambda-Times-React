import styled from 'styled-components';

// Styled Components for Tabs.js and Tab.js found below ----------------------

export const StyledTabs = styled.div `
 border-bottom: 1px solid lightgrey;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: row;
 width: 100%;
 height: 47px;
 background-color: #fff;
 @media (min-width: 1280px) {
   width: 1280px
 }
`;

export const TabsTopics = styled.div `
   display: flex;
   justify-content: none;
   align-items: center;
   flex-direction: row;
`;

export const TabsTopicsTitle = styled.span `
   font-size: 12px;
   letter-spacing: 1px;
   font-weight: bold;
`;

export const StyledTab = styled.div `
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
`;

export const StyledTabActive = styled(StyledTab) `
   background-color: #fff;
   color: #333;
   border: 2px solid #333;
`;

// Styled Components for Cards.js and Card.js found below --------------------

export const CardsContainer = styled.div `
   display: flex;
   justify-content: space-evenly;
   align-items: none;
   flex-direction: row;
   width: 100%;
   margin-top: 16px;
   flex-wrap: wrap;
   @media (min-width: 1200px) {
       width: 1200px;
   }
`;

export const StyledCard = styled.div `
   border-bottom: 1px solid lightgrey;
   display: flex;
   justify-content: space-between;
   align-items: none;
   flex-direction: column;
   background-color: #fff;
   width: 380px;
   margin-bottom: 16px;
   padding: 24px;
`;

export const StyledCardHeadline = styled.div `
   font-size: 25px;
   font-family: Didot, serif;
`;

export const StyledCardAuthor = styled.div `
   display: flex;
   justify-content: none;
   align-items: center;
   flex-direction: row;
   margin-top: 15px;
`;

export const StyledAuthorImgContainer = styled.div `
   padding-right: 10px;
   border-right: 1px solid lightgrey;
   height: 40px;
`;

export const StyledAuthorImg = styled.img `
   width: 40px;
`;

export const StyledAuthorSpan = styled.span `
   padding-left: 10px;
   font-size: 12px;
   letter-spacing: 1px;
   font-weight: bold;
`;