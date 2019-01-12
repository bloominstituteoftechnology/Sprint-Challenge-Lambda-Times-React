import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file



/* 
.top-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
}
.top-bar .container {
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
}
@media (min-width: 1280px) {
  .top-bar .container {
    width: 1280px;
  }
}
.top-bar .container .container-left {
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
}
.top-bar .container .container-left span {
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
}
.top-bar .container .container-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
}
.top-bar .container .container-center span {
  cursor: pointer;
  margin-right: 5%;
}
.top-bar .container .container-center span:last-child {
  margin-right: 0;
}
.top-bar .container .container-center span:hover {
  text-decoration: underline;
}
.top-bar .container .container-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
}
.top-bar .container .container-right span {
  cursor: pointer;
}
*/

const TopBar = () => {
  const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
  return (
    <TopBarDiv>
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
    </TopBarDiv>
  )
}

export default TopBar;