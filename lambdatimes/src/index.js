import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App';
import {tabData,cardData, carouselData} from './data'

ReactDOM.render(
<App 
tabData ={tabData}
cardData ={cardData}
carouselData={carouselData}
/>,
     document.getElementById('root'));
