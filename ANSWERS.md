What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    PropTypes are used as a way of making runtime assertions about what type of data a React component requires in order to render properly.

    It is important to type-check our components in order to know what props that component has and what type. Knowing what props a component has will prevent errors in our application, specially if it is worked by various developers.

Describe a life-cycle event in React?
    Mounting phase: Initial data of the component is defined in the constructor. Render method is called for the first time.
    Updating phase: setState can be used to change the component's state, and render() is called again.
    Un-mounting phase: componentWillUnmount() could be called when we need to erase a component.
    

Explain the details of a Higher Order Component?
    HOC is an advanced React JS pattern that allows us the capability of reusing component logic. HOC is a function that receives a Component as an argument and returns a new component. 

What are three different ways to style components in React? Explain some of the benefits of each.

    - Inline style written as objects
    - Libraries for React like Bootstrap and Styled components
    - Giving className props along with an external .css file