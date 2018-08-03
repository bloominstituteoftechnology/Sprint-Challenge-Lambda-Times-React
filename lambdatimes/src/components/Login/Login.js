import React from 'react';
import { LoginWrapper, LoginForm,
          FormInput, FormLabel } from './LoginStyle';

const Login = props => {
  return(
    <LoginWrapper>
      <LoginForm onSubmit={props.handleFormSubmit} >
        <FormLabel htmlFor="username">Username: </FormLabel>
        <FormInput name="username" type="text" placeholder="Enter Username" />
        <FormLabel htmlFor="password">Password: </FormLabel>
        <FormInput type="password" name="password" placeholder="Enter Password" />
        <FormInput type="submit" value="submit" />
      </LoginForm>
    </LoginWrapper>
  );
}

export default Login;
