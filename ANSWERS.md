1. What are PropTypes used for?
        PropTypes are a safety net, used to catch bugs before they become a problem. It checks to make sure the data you think is being passed around is actually that data type.
2. What is a lifecycle event in React?
        Mounting/birth (componentDidMount()), Updating/life (componentDidUpdate()), Unmounting/death(componentWillUnmount()).
3. What is a Higher Order Component?
        a Functional component that takes in a component (that can be a class component) as an argument, and returns a component.
4. What are three different ways to style components in React?
        You can create a single reusable component that will cahnge styling depending on the prop types passed to it. You can create an extednding component, that still uses the stylings of the reusable component, but has overriding styles on it. You can also create a component named after specific elements (like WrapperDiv = <div className="wrapper">) and just put the stylings inbetween back tics ( styled.div`stylings`;).