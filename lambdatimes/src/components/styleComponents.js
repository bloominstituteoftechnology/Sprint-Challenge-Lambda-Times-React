import styled from 'styled-components';


//== TopBar ====================================================================

export const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    position: fixed;
    height: 44px;
    background-color: #333;
    @media (min-width: 1280px) {
        width: 1280px;
    }
`;
export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: none;
    align-items: none;
    flex-direction: row;
    color: #fff;
    letter-spacing: 1px;
    padding: 0 10px;
`;
export const ContainerLeft = styled.div`
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
export const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
    span {
        cursor: pointer;
        margin-right: 5%;
    }
    span:last-child {
        margin-right: 0;
    }
    span:hover {
        text-decoration: underline;
    }
`;
export const ContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    span {
        cursor: pointer;
    }
`;


//== Header ====================================================================

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;
    @media (min-width: 1280px) {
        width: 1280px;
    }
    h1 {
        font-size: 60px;
        font-family: Didot, serif;
        font-weight: bold;
        flex: 8;
        text-align: center;
        color: #000;
    }
    span {
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
    }
`;
export const DateToday = styled.span`
    margin-left: 25px;
    flex: 1;
`;
export const Temp = styled.span`
    text-align: right;
    margin-right: 25px;
    flex: 1;
`;

//== App, Cards, Tabs ==========================================================

export const App = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f1f1f1;
    color: #333;
    font-family: 'PT Sans', sans-serif;
`;
export const ContentContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
`;
export const Tabs = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 47px;
    background-color: #fff;
    @media (min-width: 1280px) {
        width: 1280px;
    }
`;
export const Topics = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
`;
export const Title = styled.div`
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
`;
export const Tab = styled.div`
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
    :hover {
        text-decoration: underline;
    }
`;
export const TabActive = styled(Tab)`
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
`;
export const CardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: none;
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
    flex-wrap: wrap;
    @media (min-width: 1200px) {
        .cards-container {
            width: 1200px;
        }
    }
`;
export const Card = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: none;
    flex-direction: column;
    background-color: #fff;
    width: 380px;
    margin-bottom: 16px;
    padding: 24px;
`;
export const Headline = styled.div`
    font-size: 25px;
    font-family: Didot, serif;
`;
export const Author = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    span {
        padding-left: 10px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
    }
`;
export const ImgContainer = styled.div`
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;
    img {
        width: 40px;
    }
`;