1.  What are PropTypes used for?

    **PropTypes are used to verify the integrity of our application.  It is used in a component that is receiving props from a parent component.  Proptypes must be imported into the component that is using it.  This is done via improt PropTypes from 'prop-types'.**
        The format for using PropTypes is as follows:
        [componentName].propTypes = {propname: PropTypes.[datatype]}

    **If needing to check the individual properties types of an object, then PropTypes.shape() must be used.**

2.  What is a lifecycle event in React?

    **A lifecycle event is an event that occurs for every component as it goes through its life cycle.  Every component goes through three phases:  Mounting, Updating, and Unmounting.  Within each phase there are events that take place.**

    *The Mounting phase occurs when the component is firt being placed inside the DOM. The primary events/methods that occur in this phase are the constructor, render, and lastly the componentDidMount event.*

    *The Updating phase occurs whenever the state of the app or props change. The main events/methods that occur here are the getDerivedStateFromProps, shouldComponentUpdate, render, and lastly componentDidUpdate.*

    *The Last phase that occurs is the Unmounting phase.  This occurs when the component is removed from the DOM.  The only method associated with this phase is componentWillUnmount.*

3.  What is a Higher Order Component?

    **A higher order component is simply a function that takes in a component and uses that component in some way. This can be either by adding new functionality to the received component(ie wrapped component) or by using the wrapped component within the logic of the application. An example of this would be an Authentication component that takes in a component and either calls that same component or calls a different component based upon the state of some login property.  Higher Order Components allow us to take advantage of patterns within our application.  Different components that have shared functionality can use the same Higher Order Component to add the shared functionality rather than duplicating the code in each component.**

4.  What are three different ways to style components in React?

    **The three different ways to style a compent are:  Inline, CSS files, and CSS-in-JS (i.e. styled components)**

    **Styled components, similar to HTML structure in jsx, allow us to directly take advantage of the power of javascript to style our components rather than relying solely on CSS and DOM manipulation.**