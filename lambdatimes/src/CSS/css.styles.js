import styled from 'styled-components';

export const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  padding: 1.5rem;
`;

export const TopBarDivContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

export const ContainerLeftDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

export const ContainerCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;


export const ContainerRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

export const Spans = styled.span`
    ${props =>
        props.left
            ? `
        cursor: pointer;
        margin-right: 25%;
        font-weight: bold;
        `
            : null
    }
    ${props =>
        props.center
            ? `
        cursor: pointer;
         margin-right: 5%;
        `
            : null
    }
    ${props =>
        props.right
            ? `
        cursor: pointer;
        `
            : null
    }
    
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding: 0 2rem;
  padding-bottom: 15px;
`;

export const HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

export const HeaderSpans = styled.span`
    ${props =>
        props.date
            ? `
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-left: 25px;
        flex: 1;
        `
            : null
    }
    ${props =>
        props.temp
            ? `
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: right;
        margin-right: 25px;
        flex: 1;
        `
            : null
    } 
`;