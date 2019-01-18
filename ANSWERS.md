1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  PropTypes allow us to add stronger type checking to a weakly-typed language like Javascript via React. Specifically, we can use PropTypes to check the type of a value passed as a prop to a component, which is important as web apps become more complex. The wrong type can introduce serious bugs into an app, as I found out saving booleans to localstorage with JSON.stringify.

2. Describe a life-cycle event in React?

  In React, when the virtual DOM is rendered, each component mounted to the VDOM has a 'lifecycle', that is, it has a 'birth' (mounting), 'growth' (updating) and 'death' (unmounting) phases. In the birth phase, the component is built , initial data is passed, render() is invoked and componentDidMout gets called. IN the growth phase, setState can change the component's data, resulting in a call to render(). shouldComponentUpdate is a method that can be used to stop render() from being called by component if needed. Finally, in the death phase, the component is removed from VDOM, componentWillUnmount is called and can do any needed clean-up.

3. Explain the details of a Higher Order Component?

  Higher Order Components (HOCs) are a React pattern that allow the reuse of components/component logic. An HOC is a function that can receive a Component as an argument and return a new component source. This gives several advantages, including the sharing of data and function, but also using HOC as wrappers/containers for other functions (useful for things like conditional rendering, e.g. password-granted access to components).

4. What are three different ways to style components in React? Explain some of the benefits of each.

  The three ways to style components in React are to use Reactstrap, to use regular CSS and to use styled-components. Reactstrap is provides the same kind of benefits the general Bootstrap library provides - ready-made/ready-styled components, with built-in functionality, and you get the use of that within React.

  CSS works in the usual way, except you apply classes to components with the attribute className. The advantage of CSS is that you don't have to add packages via yarn or npm, and the use of CSS is already familiar.

  Finally, styled-components allow us to do styling in the usual way (albeit with some different syntax), but the biggest advantage is the ability to pass styling as a prop, so for instance, we can do conditional styling in a straightforward way. 
