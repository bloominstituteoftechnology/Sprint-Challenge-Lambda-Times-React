import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginForm = styled.form`
  width: 50%;
  height: 50%;
  margin: 100px auto;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormLabel = styled.div`
`;

export const FormInput = styled.input`
`;
