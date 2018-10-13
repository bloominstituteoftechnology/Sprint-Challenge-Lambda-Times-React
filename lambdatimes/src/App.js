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
`

const App = () => <HomePage />

export default Authenticate(App);