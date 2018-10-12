What are PropTypes used for?
What is a lifecycle event in React?
What is a Higher Order Component?
What are three different ways to style components in React?

PropTypes are used to check the data types of the incoming probs.  This type-checking, helps to minimize Type-errors and bugs because it will throw an error if data of the incorrect type is passed in as a prop, such as passing in an object when a string would be required.

A lifecycle event in react represents essentially the lifespan of a component.  Essentially a component comes to live, or is mounted, "lives" in the sense that it active in terms of the DOM, and then can be unmounted, or essentially removed or wipes clean from the DOM.

A HOC, or higher order component is a component that accepts other components as incoming props.  This is essentially a similar behavior to what we see with higher order functions that accept other functions as callbacks.

Three ways to style components are: using traditional CSS or pre-processor based approaches (such as LESS), using styled components and writing styles within the JavaScript component files, or by using a front-end styling based library such as Bootstrap and Reactstrap.
