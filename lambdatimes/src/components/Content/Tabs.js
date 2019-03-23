import propTypes from 'prop-types';
import React from 'react';
import Tab from './Tab';

const Tabs = props => {
    return (
        <div className="tabs">
            <div className="topics">
                <span className="title">TRENDING TOPICS:</span>
                {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
                {props.tabs.map((tab, index) => (
                    <Tab
                        key={index + Math.random() * 1}
                        tab={tab}
                        selectedTab={props.selectedTab}
                        selectTabHandler={props.selectTabHandler}
                    />
                ))}
            </div>
        </div>
    );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
    tabs: propTypes.arrayOf(propTypes.string).isRequired,
    selectedTab: propTypes.string.isRequired,
    selectTabHandler: propTypes.func.isRequired
};
export default Tabs;
