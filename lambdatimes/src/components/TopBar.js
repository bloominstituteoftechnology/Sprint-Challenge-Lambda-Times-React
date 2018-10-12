import React from 'react'
import {
  OuterContainer,
  InnerContainer,
  InnerContainerLeft,
  InnerContainerCenter,
  InnerContainerRight,
  SpanLeft,
  SpanCenter,
  SpanRight
} from '../styles/TopBar'

const TopBar = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <InnerContainerLeft>
          <SpanLeft>TOPICS</SpanLeft>
          <SpanLeft>SEARCH</SpanLeft>
        </InnerContainerLeft>
        <InnerContainerCenter>
          <SpanCenter>GENERAL</SpanCenter>
          <SpanCenter>BROWNBAG</SpanCenter>
          <SpanCenter>RANDOM</SpanCenter>
          <SpanCenter>MUSIC</SpanCenter>
          <SpanCenter>ANNOUNCEMENTS</SpanCenter>
        </InnerContainerCenter>
        <InnerContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </InnerContainerRight>
      </InnerContainer>
    </OuterContainer>
  )
}

export default TopBar
