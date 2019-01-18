 What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    PropTypes are used to check the variable type of the props being passed, and logs and error if they are wrong.

 Describe a life-cycle event in React?

    Mount => Update => Unmount

    Mount:
        Constructor
        render
        componentDidMount
    Update:
        render
        componentDidUpdate
    Unmount:
        ComponentWillMount

 Explain the details of a Higher Order Component?

    HOC work like HOFs, you send a component to another component or function, then return a component to be rendered.

 What are three different ways to style components in React? Explain some of the benefits of each.

    vanilla CSS, styled components and reactstrap. 
    Vanilla CSS doesn't clutter up a JS like styled components do and it's quick, no need to install anything extra. I would use it if I were trying to build an app quickly or just get something up and running.
    Styled Components put the styles right next to the components, making it easy to adjust things. It's also more of a 'react' way of doing things.
    Reactstrap uses the Bootstrap library and uses pre-built components. It's an easy way to get your page styled, but it's hard to customize their components.
