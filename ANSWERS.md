### Questions:

1.  What are PropTypes used for?
PropTypes are used to verify and check whether or not a prop that you passed into a component is of the right data type, allowing for the programmer to set up little warnings for themselves if they are unsure about how the data is being represented on the VirtualDom. For novices like me, it is also like a handy dandy little map on the bottom of the page, showing me what exactly the component is being used for and what its role is in the data chain/flow.

1.  What is a lifecycle event in React?
(bit of a vague question, but here it goes)

A lifecycle event in React is the birth, life, and death of a component in React. There are three phases that a component goes through = 
1) "Mounting", which requires the constructor to set up a state for the component, whether or not its passed down through props or given directly by a super() method; finally, it gets rendered with the render() method and checked with the componentDidMount() method

2) "Updating", where the component can change its state dynamically with the setState method (again, gaining access to data either through props or directly if its a class component)

3) Finally, death, or "Unmounting", where the component is unmounted, and the componentDidUnmount() method can be used to clean up whatever leftovers are left on the VirtualDom


1.  What is a Higher Order Component?

Like a higher order function, a higher order component is simply a component that takes another component as a argument. Components are, in essense, functions, and can take other functions in as parameters. This is useful for things like forcing a user to confront a login screen to autheticiate themselves before being allowed into the larger "app" itself. 

1.  What are three different ways to style components in React?

You can style components with normal css style sheets, use a themed library of components already set up like React Bootstrap, or do the (before) unthinkable: write CSS in Javascript with a library called Styled Components.

I'm not to the point that I really understand the use of this system, but it seems quite popular and I am sure I will need to implement it in the future.