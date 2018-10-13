import Styled from 'styled-components';

export const ContentContainer = Styled.div`
    width: 100%;
`;

export const Topics = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 1rem 0;
    margin: 0;
`;

export const TabItem = Styled.div`
    letter-spacing: 2px;
    background-color: black;
    color: white;
    padding: 2px 10px;
    margin: 0 5px;
    cursor: pointer;
`;

export const TabActive = Styled.div`
    letter-spacing: 2px;
    background-color: white;
    color: black;
    text-decoration: underline;
    padding: 2px 10px;
    border: 1px solid black;
    margin: 0 5px;
    cursor: pointer;
`;
