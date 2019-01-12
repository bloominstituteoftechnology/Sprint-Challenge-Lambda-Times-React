1. PropTypes are used to check the data type of the props being passed into a component. Since JavaScript isn't a strictly typed language, PropTypes can be used to let the developer know if a prop is being passed in the wrong data type for that component's functionality. This can help for debugging, with more helpful error messages.

2. After a component completes it's mounting phase, componentDidMount() is called, if present within the component. Whatever instructions are included within that method are then carried out. This is useful if setting state with information that might take longer to retrieve than the component will take to render.

3. A higher-order component is a composition pattern used to have a re-usable way to extend Component logic to any component passed into the HOC as an argument.

4. Plain Old CSS - linking CSS files to components and styling them with ye olde stylesheet. Using a framework - Using a framework like Bootstrap/reactstrap is also a way to quickly get a project styled. Styled-components - Styled components is a way to create components with their styling directly created in JS, with no additional style sheets added. This is useful for creating re-usable, pre-styled components that you can just pop in your app.
