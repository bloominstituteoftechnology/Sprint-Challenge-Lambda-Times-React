import styled from 'styled-components';

const DateSpan = styled.span``;
const TempSpan = styled.span``;

const HeaderDiv = styled.div`
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

    & > h1 {
        font-size: 60px;
        font-family: Didot, serif;
        font-weight: bold;
        flex: 8;
        text-align: center;
        color: #000;
    }

    & > span {
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
    }

    & > ${ DateSpan } {
        margin-left: 25px;
        flex: 1;
    }

    & > ${ TempSpan } {
        text-align: right;
        margin-right: 25px;
        flex: 1;
    }
`; // HeaderDiv

export {
    HeaderDiv, 
    DateSpan, 
    TempSpan, 
};
