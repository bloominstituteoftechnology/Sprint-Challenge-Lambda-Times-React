
# Questions & Answers:
1. What are PropTypes used for?
	### Answer: 
	PropTypes are validators for our React components; they determine whether or not the props passed to our components are what we expect.

2. What is a lifecycle event in React?
	### Answer: 
	Lifecycle methods are special methods each component can have that allow us to hook into the views when specific conditions happen (i.e. when the component first renders or when the component gets updated with new data, etc).

There are many different life cycle methods, but the ones that are used most often (which will cover ~90% of use cases).

- When a component get mounted to the DOM and unmounted.
- When a component receives new data.

3. What is a Higher Order Component?
	### Answer: 
	A higher-order component (HOC) is an advanced technique in React for reusing component logic. ... They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.

4. What are three different ways to style components in React? 
	### Answer: 
	Actually, they're four ways to style react components:
	A. CSS Stylesheet: Simply import css file <code>import './DottedBox.css'</code> so you can have a separate css file for each component.

	B. Inline styling: In React, inline styles are not specified as a string. Instead they are specified with an object whose <strong>key </strong> is the <strong>camelCased </strong> version of the style name, and whose value is the style’s value, usually a string.


	C. CSS Modules: A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.

	D: Styled-components: a library for React and React Native that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS