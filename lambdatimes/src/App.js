import React from 'react';
import styled from 'styled-components';
import { HomePage } from './HomePage';
import Authenticate from './components/Authenticate/Authenticate';

const AppContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;

    width: 100%;
    border-bottom: 1px solid lightgrey;
    @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 400;
    src: local('PT Sans Italic'), local('PTSans-Italic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizYRExUiTo99u79D0e0x8mN.ttf) format('truetype');
    }
    @font-face {
    font-family: 'PT Sans';
    font-style: italic;
    font-weight: 700;
    src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'), url(https://fonts.gstatic.com/s/ptsans/v9/jizdRExUiTo99u79D0e8fOydLxUY.ttf) format('truetype');
    }
    @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 400;
    src: local('PT Sans'), local('PTSans-Regular'), url(https://fonts.gstatic.com/s/ptsans/v9/jizaRExUiTo99u79D0KEwA.ttf) format('truetype');
    }
    @font-face {
    font-family: 'PT Sans';
    font-style: normal;
    font-weight: 700;
    src: local('PT Sans Bold'), local('PTSans-Bold'), url(https://fonts.gstatic.com/s/ptsans/v9/jizfRExUiTo99u79B_mh0O6tKA.ttf) format('truetype');
    }
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
`

const App = () => <HomePage />

export default Authenticate(App);