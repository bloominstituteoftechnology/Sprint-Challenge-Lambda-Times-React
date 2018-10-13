## 1.  What are PropTypes used for?
    A: Props is an abbreviation for 'properties'.  Props are used to pass data down from parent components to child components. PropTypes is a library of validators that ensure the the right type of props are passed to a component.  PropTypes prevent the parent from passing child components objects that the child cannot use.   Each time, a value is passed through a prop, it gets validated for it’s type. If you pass a value through a prop with a different data type than is specified in the PropTypes.  In other words, if the child component is a function that requires a string and the parent tries to pass a boolean, PropTypes throws an error.  

##2.  What is a lifecycle event in React?
    A:     An order of operations that defines the different stages of a component's operation from the initial creation phase, where the component is created, the changes triggered by state and props changes and the end of the component's use (unmounting phase).  Understanding the lifecycle allows the program to perform certain actions when a component is created or destroyed. Further, it allows the app to decide if a component should be updated or not (conditional) and to react to props or state changes accordingly.

    The lifecycle is divided into these categories:
        Initialization - Component instantiation, initial loading of state and props and rendering.

        State changes - Events that mutate state (data)

        Props changes - Data mutations that are passed from parent components to child components

        Unmounting - Destruction of the component and clean up operations.

    Within these categories are the subset of related lifecycle methods:
        Initialization
            Initial
            GetDefaultProps
            GetInitialState
            ComponentWillMount
            render
            ComponentDidMount

        State Changes
            Updating State
            ShouldCompnentUpdate
            CoponentWillUpdate
            Render
            ComponentDidUpdate

        Props Changes
            Updating Props
            ComponentWillReceiveProps
            ShouldCoponentUpdate
            ComponentWillUpdate
            Render
            ComponentDidUpdate

        Unmounting
            ComponentWillUnmount

## 3.  What is a Higher Order Component?
    A: A Higher Order Component returns class or function objects.  The common use for HOC's is to prevent unauthorized access to specific areas of the app.  For example, a user authentication HOC that will only allow use of the app after the user provides a username and password.  HOC's can operate with different levels of priveleges for specific users although this function is the scope of our current insruction.

##4.  What are three different ways to style components in React?
    A: React compnents can be styled by:
        * Direct insertion into the tags (inline CSS).
        * External StyleSheets that use classNames and a component-specific CSS file.
        * Styling libraries, like Card and styled-components, which are imported when an app starts.
        * CSS Modules that use locally scoped styles that avoid rules clashes and overwrites.


    

