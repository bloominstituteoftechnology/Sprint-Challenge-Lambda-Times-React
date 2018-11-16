### Questions:

1.  What are PropTypes used for?
PropTypes are used to check that the data you are receiving is the type of data you expected. If it isn't, you'll get a warning.
PropTypes also help you when you come back to older code because you can look at them and quickly figure out what type of data should be flowing through.

1.  What is a lifecycle event in React?
A lifecycle event is part of the life of a React component. First, did the componentDidMount(), then did the componentDidUpdate(), and finally componentWillUnmount(). Each event has it's purpose. For example, componentDidMount() should hold api requests since it can take awhile for pull requests to come in, so you don't want the component to mount without the api data. componentWillUnmount() is used to remove event listeners.

1.  What is a Higher Order Component?
It's a type of Higher Order Function. It's a component that is passed into another component so that it can inherit some of the functionality of the other component.

1.  What are three different ways to style components in React?
    1. You can create a .css stylesheet and import it into your .js file.
    2. Inline styling, specifying the style with an object with a key that is a camelCased version of the style name, and a value that is the style's value.
    3. Using styled-components, you can write css directly in your .js file.
