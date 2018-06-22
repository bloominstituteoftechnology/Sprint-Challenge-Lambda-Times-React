import styled from "styled-components";

export const TopBarContainer= styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  ${ContainerLeft}
  ${ContainerCenter}
  ${ContainerRight}
  ${SpanStyle}

  @media (min-width: 1280px) {
    width: 1280px;
}


`;

export const TopContainer= styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
 ${ContainerLeft}
 ${ContainerCenter}
 ${ContainerRight}
 ${SpanStyle}
 
   @media (min-width: 1280px) {
    width: 1280px;
}
`;

export const SpanStyle =styled.span`
	 cursor: pointer;
 	 margin-right: 5%;
	
	 &:hover {
   	  text-decoration: underline;
  	}

	&:last-child {
 	 margin-right: 0;
	}
`;

export const SpanRight =styled.span`
  	cursor: pointer;
`;

export const ContainerRight =styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  ${SpanRight}
`;


export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  ${SpanStyle}
`;


export const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

