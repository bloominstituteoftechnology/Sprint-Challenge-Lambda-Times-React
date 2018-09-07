1.	What are PropTypes used for?
To type check the data we’re sending through components
2.	What is a lifecycle event in React?
Lifecycle events are functions that fire when a components is being mounted, dismounted, or will mount. 
The Birth/Mounting Phase
•	This is the phase when the component is being built out from ground up.
•	Whatever initial data we have access too Will be defined on the constructor of this phase
• render method is invoked.
•	componentDidMount gets called as well.
Growth/Updating Phase
•	setState can be used to change the component’s state data, forcing a call to render.
•	shouldComponentUpdate is a method one could use here to stop a component from calling render if necessary.
Death/Un-mounting Phase
•	Component is removed from the screen.
•	componentWillUnmount is called and can be used for any clean up we may need to do.
•	componentDidUpdate
•	componentWillUnmount

3.	What is a Higher Order Component?
A component that takes a component as an argument
4.	What are three different ways to style components in React?
Import regular style sheets, preprocessors, and styled components
