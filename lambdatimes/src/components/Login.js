import React from 'react';
import styled from 'styled-components'

// const LoginStatus = () => {

// }
// Submission = (event) => {
//     event.preventDefault();

//     console.log(inputHander())
// }



//onChange={inputHandler}
const LoginPage = (props) => {
    return (
        <div>
            <form action="#" onSubmit={props.sub}>
                Username: <input name="username" type="text" placeholder="Dan" onChange={props.input}></input>
                Password: <input name="password" type="password" placeholder="password" onChange={props.input}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


const Login = (Component) => {

    return class extends React.Component{
        constructor(){
            super();
            this.state = {
                password: '',
                username: ''
              };
        }
        subHandler = (event) => {
            event.preventDefault();
            console.log(this.state.username,this.state.password)
            
            
        }
        randTest = () => {
            return (this.state.username==="Dan" && this.state.password === "password" ? false : true)
        }

        inputHandler = (event) => {
            console.log([event.target.name],event.target.value)
            this.setState({
                [event.target.name]:event.target.value,
                [event.target.name]:event.target.value
            })
        }

       render(){
           if(this.randTest()){
               return <LoginPage input={this.inputHandler} sub={this.subHandler}/>
           } else {
               return <Component />
           } 
       }
   }
}

export default Login;