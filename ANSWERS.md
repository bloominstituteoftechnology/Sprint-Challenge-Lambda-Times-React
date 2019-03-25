## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Answer: PropTypes ensures that the data we are passing around in out components is the correct "type" to prevent bugs in our application later on. JavaScript is flexible and will allow us to pass data that isn't exactly what we wanted and will not function the way we intended later if not checked.





- [ ] Describe a life-cycle event in React?

Answer: A lifecycle event in React is simply the phases of a Components "life" when an application is being built. 
    1. The Birth/Mounting Phase
        ex. - componentDidMount gets called
    2. Growth/Update Phase
        ex. - setState can be used to change state data, causing render to be called
    3. Death/Unmounting Phase
        ex. - componentWillUnmount is called used to clean up data





- [ ] Explain the details of a Higher Order Component?

Answer: A Higher Order Component is used for designing components that share a certain behaivor or data and allows them to be connected in a different more complex way than just using "state" or "props". It gives repeatable functions and reuse to components.





- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Answer: 
    1. css stylsheets
        ex. 
        
        import './styles.css'


    2. inline styles
        ex. 

        let redStyle = {
            color: red
        }

        return <div style={redStyle}>Inline Styles</div>


    3. Styled-Components
        ex. 

        Const Div = styled.div`
            margin: 20px;
            padding: 20px;
            border: 1px solid red;
        `
        Const Content = styled.p`
            font-size: 16px;
            color: red;
        `

        Const App = () => (
            <Div>
                <Content>Styled Components</Content>
            </Div>
        )


