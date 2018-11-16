1.  What are PropTypes used for?
    PropTypes are used to check what types of variables are being passed in as different props for a component.  This has multiple benifits, allowing easier reuse of components, catching bugs due to passing props incorrectly, and giving whoever reads the code a quick and easy glance at how the incoming data is structured.
1.  What is a lifecycle event in React?
    A lifecycle event is an event corresponding to how/when the react app is rendered or altered.  The main lifecycle events are when the component mounts, updates, and unmounts.  These are important as they give us the ability to initialize the app and its state, update it along the way as the user interacts with it or data changes, and dismounts the app and its corresponding event listeners from the window.
1.  What is a Higher Order Component?
    A higher order component is a component that takes another component in as an argument.  Our example this week was an Authentication HOC, which controlled which components to run and render based off of login information.
1.  What are three different ways to style components in React?
    Original CSS, CSS with pre-processors, react-strap components, and styled components.  My preference is styled components.