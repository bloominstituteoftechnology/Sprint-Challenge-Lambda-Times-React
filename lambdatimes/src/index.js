import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';

import Authenticate from '../src/components/Authenticate';

const AuthApp = Authenticate(App);

ReactDOM.render(<AuthApp />, document.getElementById('root'));