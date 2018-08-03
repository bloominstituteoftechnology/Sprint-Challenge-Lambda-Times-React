Questions:
1. What are PropTypes used for?
2. What is a lifecycle event in React?
3. What is a Higher Order Component?
4. What are three different ways to style components in React?

Answers:
1. PropTypes is used for checking the types of the props that are being set to be rendered. (e.g. an array containing objects, and/or an array or object containing strings, numbers, booleans, and/or a string, number, etc.) This will only console log a warning, not fail to compile if types are mismatched.

2. A lifecycle event in React is a way to wait for additional data from components being rendered. If the data the component is handling causes a change, the lifecycle event can execute a function nested inside of it in order to update what is being rendered/executed. (e.g. A timer can be stopped, a Log In can be authenticated.)

3. Higher Order Components are functions that accept functions as arguments, and can build components if a generator function (instantiated by an anonymous class or not) is nested within it.

4. React can be styled with CSS files, react-strap, or styled components. 



