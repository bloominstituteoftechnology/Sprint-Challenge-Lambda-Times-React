import React, { Component } from "react";
import * as S from "../CSS/styles";

class Login extends Component {
  handleChange = e => {
    e.preventDefault();
    sessionStorage.setItem("authenticated", e.target.value);
  };

  render() {
    return (
      <S.FormDiv>
        <S.FormHandler onSubmit={this.props.submit}>
          <S.FormH1>Welcome to lambda Times</S.FormH1>
          <S.InputText type="text" onChange={this.handleChange} />
          <S.InputSubmit type="submit" onSubmit={this.props.submit} />
        </S.FormHandler>
      </S.FormDiv>
    );
  }
}

export default Login;
