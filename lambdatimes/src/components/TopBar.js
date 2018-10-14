import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Topbarwrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`
const Containerrwrapper = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`
const Containerdiv = styled.div`
display: flex;
align-items: center;
flex: 1;
font-size: 11px;
flex-direction: row;
@media (min-width: 1280px) {
    width: 1280px;
  }
 ${props => props.left && `
justify-content: none;
`}
${props => props.right && `
justify-content: flex-end;
font-weight: bold;
`}
${props => props.center && `
justify-content: center;
flex: 3;
font-size: 9px;
`}
`

const Spanwrapper = styled.span`
cursor: pointer;
${props => props.spanleft && `
 margin-right: 25%;
 font-weight: bold;
`}
${props => props.spancenter && `
cursor: pointer;
margin-right: 5%;
&:hover {
  text-decoration: underline;
}
&:last-child {
  margin-right: 0;
}
`}
${props => props.spanright && `
cursor: pointer;
color : red;
`}
`
const TopBar = () => {
  return (
    <Topbarwrapper>
    <Containerrwrapper>
      <Containerdiv left >
      <Spanwrapper spanleft>TOPICS</Spanwrapper>
      <Spanwrapper spanleft>SEARCH</Spanwrapper>
      </Containerdiv>

      <Containerdiv center>
      <Spanwrapper spancenter>GENERAL</Spanwrapper>
      <Spanwrapper spancenter>BROWNBAG</Spanwrapper>
      <Spanwrapper spancenter>RANDOM</Spanwrapper>
      <Spanwrapper spancenter>MUSIC</Spanwrapper>
      <Spanwrapper spancenter>ANNOUNCEMENTS</Spanwrapper>
      </Containerdiv>
     
      <Containerdiv right>
      <Spanwrapper spanright>LOG IN</Spanwrapper>
      </Containerdiv>
    </Containerrwrapper>
</Topbarwrapper>
    /*
    <div className="top-bar">
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </div>*/
  )
}



export default TopBar;
