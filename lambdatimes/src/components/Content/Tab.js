import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChildTab = styled.div`
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
    &:hover {
        text-decoration: underline;
    }

    ${props => props.notClassName ? `background-color: #fff; color: #333; border: 2px solid #333;` : null}
`

export const Tab = props => <ChildTab
                                notClassName={props.tab === props.selectedTab ? true : false}
                                onClick={() => props.selectTabHandler(props.tab)
                                }
                            >
                              {props.tab.toUpperCase()}
                            </ChildTab>

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}