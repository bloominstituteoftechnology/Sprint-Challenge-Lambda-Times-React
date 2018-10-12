import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const ActiveTab = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
`;

const NotActiveTab = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
`;


const Tab = (props) => {
    /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/
    if (props.tab === props.selectedTab) {
        return (
            <ActiveTab onClick={() => {props.selectTabHandler(props.tab)}}>
                {props.tab.toUpperCase()}
            </ActiveTab>
            )
        } else {
            return (
            <NotActiveTab onClick={() =>            {props.selectTabHandler(props.tab)}}>
                {props.tab.toUpperCase()}
            </NotActiveTab>
            )
        }
    }


Tab.propTypes = {
    tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
    tab: PropTypes.string.isRequired,
    selectedTab: PropTypes.string.isRequired,

}
// Make sure you include PropTypes on your props.

export default Tab
