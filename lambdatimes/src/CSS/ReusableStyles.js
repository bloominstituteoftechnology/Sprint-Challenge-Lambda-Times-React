import styled from 'styled-components';

const TopBarBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
    }

    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

const ContainerLeft = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;

    span {
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
    }
`;

const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;

    span {
        cursor: pointer;
        margin-right: 5%;

        &:hover {
            text-decoration: underline;
        }

        &:last-child {
            margin-right: 0;
        }
    }
`;

const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    font-size: 11px;

    span {
        font-weight: bold;
        cursor: pointer;
    }
`;

export {
    TopBarBox,
    Container,
    ContainerLeft,
    ContainerCenter,
    ContainerRight
};