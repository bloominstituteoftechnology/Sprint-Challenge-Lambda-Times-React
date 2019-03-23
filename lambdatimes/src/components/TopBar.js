import React from 'react';
import {
    TopBarDiv,
    TopBarDivContainer,
    ContainerLeftDiv,
    ContainerCenterDiv,
    ContainerRightDiv,
    Spans
} from '../CSS/css.styles';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
    return (
        <TopBarDiv>
            <TopBarDivContainer>
          <ContainerLeftDiv>
            <Spans left>TOPICS</Spans>
                    <span>SEARCH</span>
          </ContainerLeftDiv>
          <ContainerCenterDiv>
                    <Spans center>GENERAL</Spans >
                    <Spans center>BROWNBAG</Spans >
                    <Spans center>RANDOM</Spans >
                    <Spans center>MUSIC</Spans >
                    <Spans center>ANNOUNCEMENTS</Spans >
          </ContainerCenterDiv>
          <ContainerRightDiv>
                    <Spans right>LOG IN</Spans >
          </ContainerRightDiv>
            </TopBarDivContainer>
        </TopBarDiv>
    );
};

export default TopBar;
