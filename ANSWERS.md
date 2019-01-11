1. PropTypes are used by developers to ensure data being passed through components is the correct type. Type checking our data is important because it can help track down bugs before they become a larger problem. 

2. A lifecycle event in React includes phases of a components life: Mounting, Updating, and Unmounting. Mounting is when the component is built out using data from the constructor and render being invoked. Anything in `componentDidMount` will also get called. Updating is when `setState` can be used to change state data which will call `render`. At Unmounting, the component is removed from the screen. `componentWillUnmount` is a method that can be used to clean up anything you need to clear out. 

3. HOCs are similar to higher order functions in that they allow us to reuse logic; in this case, a component's logic. HOCs will share information and functionality and can be used to conditionally render components (i.e. rendering different components based on whether a user is logged in or not).

4. Inline Styles - This is a quick and easy way to style components and it is easy to change styles baed on the logic of a component.
Reactstrap - Bootstrap for React. Pre-built components that are already styled using the Bootstrap library. These could be very useful for building prototypes of sites or if you want to get something up and running quickly.
Styled-components - We can customize our own reusable components and write our CSS in our JS files.