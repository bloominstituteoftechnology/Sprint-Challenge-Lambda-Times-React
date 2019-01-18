import React from 'react';

const LoginPage = (props) => {
    return (
        <div>
            <form action="#" >
                Username: <input name="username" type="text" placeholder="Dan" onChange={props.input} value={props.username}></input>
                Password: <input name="password" type="password" placeholder="password" onChange={props.input} value={props.password}></input>
                <button onClick={props.sub}>Submit</button>
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
                username:'',
                status:false
              };
        }

        SubmitButton = (event) => {
            
            if(this.state.username==="Dan" && this.state.password==="password"){
                this.setState({
                    status:true
                })
                
            } else {
                event.preventDefault();
                this.setState({
                    password:'',
                    username:'',
                })
            }
        }

        inputHandler = (event) => {
            this.setState({
                [event.target.name]:event.target.value,
                [event.target.name]:event.target.value
            })
        }

       render(){
           if(!this.state.status){
               return <LoginPage 
                        input={this.inputHandler} 
                        sub={this.SubmitButton} 
                        username={this.state.username} 
                        password={this.state.password}/>
           } else {
               return <Component />
           } 
       }
   }
}

export default Login;