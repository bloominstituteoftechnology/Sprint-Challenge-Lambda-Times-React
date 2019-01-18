import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {

    return (
        <div className="tabs">
            <div className="topics">
                <span className="title">TRENDING TOPICS:</span>
                {
                    props.tabs.map(tab => <Tab  tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selected} />)

                }
            </div>
        </div>
    );

};



export default Tabs;