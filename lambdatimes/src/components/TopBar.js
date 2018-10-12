import React from "react";
import {
  StyledTopBar,
  TopBarContainer,
  ContainerLeft,
  ContainerCenter,
  ContainerRight
} from "./Content/Styles";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };
  render() {
    return (
      <StyledTopBar>
        <TopBarContainer>
          <ContainerLeft>
            <span>TOPICS</span>
            <span>SEARCH</span>
          </ContainerLeft>
          <ContainerCenter>
            <span>GENERAL</span>
            <span>BROWNBAG</span>
            <span>RANDOM</span>
            <span>MUSIC</span>
            <span>ANNOUNCEMENTS</span>
          </ContainerCenter>
          <ContainerRight>
            <span onClick={this.logout}>LOG IN</span>
          </ContainerRight>
        </TopBarContainer>
      </StyledTopBar>
    );
  }
}
export default TopBar;
