import React from 'react';
import { HomePage } from './HomePage';
import Authenticate from './components/Authenticate/Authenticate';

const App = () => <HomePage />

export default Authenticate(App);