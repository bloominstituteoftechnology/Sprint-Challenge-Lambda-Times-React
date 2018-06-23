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

const HeaderBox = styled.div`
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

const Date = styled.div`
    margin-left: 25px;
    flex: 1;
`;

const Temp = styled.div`
    text-align: right;
    margin-right: 25px;
    flex: 1;
`;

const ContentContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center;
`;

const TabsBox = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 47px;
    background-color: #fff;
    }

    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

const Topics = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
`;

const Title = styled.div`
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
`;

const TabBox = styled.div`
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

    .active-tab {
        background-color: #fff;
        color: #333;
        border: 2px solid #333;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: none;
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
    flex-wrap: wrap;
`;

const CardBox = styled.div`
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

const Headline = styled.div`
    font-size: 25px;
    font-family: Didot, serif;
`;

const Author = styled.div`
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

const ImgContainer = styled.div`
    padding-right: 10px;
    border-right: 1px solid lightgrey;
    height: 40px;

    img {
        width: 40px;
    }
`;

const CarouselBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-top: 16px;
    }

    @media (min-width: 1200px) {
    .carousel {
    width: 1200px;
    }

    img {
        width: 100%;
        
    }      
`;

const CarouselLeft = styled.div`
    top: 50%;
    left: 25px;
    transform: translate(0, -50%);

    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    font-size: 40px;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &:hover {
        color: #333;
        background-color: #fff;
        border: 2px solid #333;
    }
`;

const CarouselRight = styled.div`
    top: 50%;
    right: 25px;
    transform: translate(0, -50%);

    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    font-size: 40px;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;

    &:hover {
        color: #333;
        background-color: #fff;
        border: 2px solid #333;
    }
`;

export {
    TopBarBox,
    Container,
    ContainerLeft,
    ContainerCenter,
    ContainerRight,
    HeaderBox,
    Date,
    Temp,
    ContentContainer,
    TabsBox,
    Topics,
    Title,
    TabBox,
    CardsContainer,
    CardBox,
    Headline,
    Author,
    ImgContainer,
    CarouselBox,
    CarouselLeft,
    CarouselRight
};