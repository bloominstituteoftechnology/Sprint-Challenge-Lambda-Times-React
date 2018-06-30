import React from 'react';
import styled from 'styled-components';


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const ContainerCenterStyles = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  flex:3
  font-size:9px;
`
const ContainerCenterSpanStyles = styled.span`
  cursor: pointer;
  margin-right: 5%;
`
const ContainerLeftStyles = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContainerLeftSpanStyles = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const ContainerRightStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const ContainerRightSpanStyles = styled.span`
  cursor: pointer;
`
const TopBarStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

`
const ContainerStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
`


const TopBar = () => {
  return (
    <TopBarStyles>
        <ContainerStyles>

            <ContainerLeftStyles>

                <ContainerLeftSpanStyles>TOPICS</ContainerLeftSpanStyles>
                <ContainerLeftSpanStyles>SEARCH</ContainerLeftSpanStyles>

            </ContainerLeftStyles>
            <ContainerCenterStyles>

                <ContainerCenterSpanStyles>GENERAL</ContainerCenterSpanStyles>
                <ContainerCenterSpanStyles>BROWNBAG</ContainerCenterSpanStyles>
                <ContainerCenterSpanStyles>RANDOM</ContainerCenterSpanStyles>
                <ContainerCenterSpanStyles>MUSIC</ContainerCenterSpanStyles>
                <ContainerCenterSpanStyles>ANNOUNCEMENTS</ContainerCenterSpanStyles>

            </ContainerCenterStyles>
            <ContainerRightStyles>

                <ContainerRightSpanStyles>LOG IN</ContainerRightSpanStyles>

            </ContainerRightStyles>

        </ContainerStyles>
    </TopBarStyles>
  )
}

export default TopBar;