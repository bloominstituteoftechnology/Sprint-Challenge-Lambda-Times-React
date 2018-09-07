1. The use of PropTypes is to catch and/or prevent bugs in larger apps by typechecking. The function of PropTypes is to make sure that the data being
passed is valid; if for example you permit a user to enter only a string, you can check with PropTypes to make sure that you are receiving the type of
input you've specified. This feature is so important because JavaScript is a loosely-typed language, meaning the developer doesn't have to specify what
type of information will be stored in a variable. An expression like " const myVar = 1; " (excuse the quotes) doesn't have to declare myVar as an integer
because JavaScript will take care of this. PropTypes helps to prevent developers from running into issues caused by this.

2. A lifecycle event or method is a method that can be used to run code at particular times in a process. Methods like constructor() and componentDidMount()
are examples of this; componentDidMount(), for instance, is always invoked immediately after a component has been inserted into the tree. You could use this
to call setState() without having a user see any intermediate steps. Other events like componentDidUpdate() and setState() are more examples of lifecycle
events. Render() is unique in that it is the only required method in a class component.

3. A higher-order component, similar in nature to examples that we saw in JavaScript with functions, is a component that is passed another component to
transform it into something new. The general syntax is "const newComponent = HOC(PassedComponent)". This allows developers to reuse component logic in
an efficient manner.

4. Some methods of react styling would be the use of separate CSS file imports, standard inline styling, and styled components.
