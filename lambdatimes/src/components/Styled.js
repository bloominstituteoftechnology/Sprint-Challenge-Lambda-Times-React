import styled from 'styled-components';

export const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
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
  max-width: 1280px;
`;

export const LinkContainers = styled.div`
  display: flex;
  justify-content: ${props => {
    switch (props.justify) {
      case 'start':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'end':
        return 'flex-end';
      default:
        return 'none';
    }
  }};
  align-items: center;
  flex-direction: row;
  flex: ${props => props.flex};
  font-size: ${props => (props.small ? '9px' : '11px')};

  span {
    cursor: pointer;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};

    &:not(:last-child) {
      margin-right: ${props => (props.small ? '5%' : '25%')};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
