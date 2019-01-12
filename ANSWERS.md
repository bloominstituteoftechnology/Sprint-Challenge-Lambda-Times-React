[ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to ensure that the correct type of data is being passed from component to component within a React application.  It is important to check data types because when using React, the view and functionality of a component depends on the proper handling of this data.  If incorrect data types are passed, they are likely to render the application unusable.  As such, it's important that we make it easy to tell when incorrect data is being passed, and inform the user as to exactly how to correct this error.

[ ] Describe a life-cycle event in React? 

A life-cycle event is an event that fires and triggers a function (called a lifecycle method).  Some examples of this include componentDidMount, componentDidUpdate, and componentWillUnmount which fire after the component mounts, after the components updates, or before the component unmounts, respectively.

[ ] Explain the details of a Higher Order Component? 

A Higher Order Component (HOC) is a type of React component that takes a component as an argument and returns a component, most often a variation of the original component with expanded functionality.

[ ] What are three different ways to style components in React? Explain some of the benefits of each.

1) Using a traditional CSS stylesheet.  This has the benefit of being understandable to the average user and easy to implement.
2) Using inline styling within our JSX.  This has the benefit of being closely tied to the logic of the individual component, but can cause problems due to high specificity.
3) Using the third party module styled-components.  This allows us to take benefits from both inline styling and CSS sheets, as the styles themselves are restricted to individual components and props can be used to implement logic, but it eventually transpiles to a typical CSS stylesheet.