1. What are PropTypes used for?
    A: PropTypes are used to check the type of data being passed in as a value for a prop (whether it's a string, a function, a boolean, a number, etc.). If it's set to required, it will show a warning to indicate that the value is not correct.

2. What is a lifecycle event in React?
    A: A lifecycle event in React is a point in the React rendering and committing period when certain conditions will happen. It follows a path from initialization to completion. Methods can be used at each of these lifecycle events to tell React when to trigger different functions.

3. What is a Higher Order Component?
    A: A higher order component in React is similar to a callback in regular JS. Like how a callback function can take in another function as a parameter in JS, a higher order component can take in another component as an argument. This allows us to make similar functionality that wraps multiple components that may require it. In this way, rather than building that same functionality each time in each separate lower order component, we build it once and apply it to the components. It's DRYer— we repeat ourselves less.

4. What are three different ways to style components in React? 
    A: You can use regular CSS. 
    You could use reactstrap to style components. 
    You can also use styled-components to write your styles on the same document as your component (keep things contained, but also in readable chunks).

    I'm sure there's more ways to go about styling components in React, but that's what I've come up with.