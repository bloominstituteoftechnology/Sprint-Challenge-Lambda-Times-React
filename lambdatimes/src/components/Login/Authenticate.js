const Authenticate = Component => class extends React.Component {
    constructor() {
        super();
        this.state={
            loggedIn:false
        }
    }




    render() {
        if (this.state.loggedIn){
            return <Component />
        } else {
            return <Login />
        }
    }
}

export default Authenticate;