import styled from 'styled-components';

export const TopNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`;

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;

    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

export const TopContainerLeft = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`;

export const TopContainerLeftSpan = styled.span`
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`;

export const TopContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`;

export const TopContainerCenterSpan = styled.span`
    cursor: pointer;
    margin-right: 5%;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const TopContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`;

export const TopContainerRightSpan = styled.span`
    cursor: pointer;
`;