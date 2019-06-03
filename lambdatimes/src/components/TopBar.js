import React from 'react';
import styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const TopStyle = styled.div `
 display: inline-flex;
 flex-direction: row;
 justify-content: space-around;
 align-content: center;
    width: 100%;
   border: 2px solid blue;
   ${props => (props.type === "left" ? `background : yellow-green`: null)}`
   
    
const TopBar = () => {
  return (
    <TopStyle  >
           <span>TOPICS</span><span>SEARCH</span>
           <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
            <span>LOG IN</span>
      </TopStyle>
  )
}

export default TopBar;