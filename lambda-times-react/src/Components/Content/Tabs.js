import React from 'react';
import Tab from './Tab'
import './Tabs.css';

const Tabs = props => {
    return (
        <div className="tabs">
            <div className="topics">
                <span className="title">
                    TRENDING TOPICS: </span>
                {props.tabs.map(tab => {
                        return <Tab
                            key={Math.random()}
                            tab={tab}
                            selectTabHandler={props.selectTabHandler}
                            selectedTab={props.selectedTab}
                        />
                    })}
                
            </div>
        </div>    
    )
}

export default Tabs;