import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";

const Tabs = props => {
    const {selectTabHandler, selectedTab} = props;
    return (
        <div className="tabs">
            <div className="topics">
                <span className="title">TRENDING TOPICS:</span>
                {props.tabs.map(tab => {
                    return (
                        <Tab selectTabHandler={selectTabHandler} selectedTab={selectedTab} tab={tab} />
                    )
                })}
            </div>
        </div>
    );
};

Tabs.propTypes = {
    selectedTab: PropTypes.string,
    selectTabHandler: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
