1.  What are PropTypes used for?

    PropTypes are used to validate the the props of a component. By validate, I mean they constrain
    the type of props to be of a particular data type. It handles primitive types as well as more
    complex data like objects. Additionally, components can have default props which will be set in
    the event props were not passed in.

2.  What is a lifecycle event in React?

    Lifecycle events are functions that are called when certain conditions are met within the life
    of the component. Things like when it is mounted or for any state changes. They allow us to add
    functionality to the components at those particular spots, which makes the components highly
    useful for web application development. Most of the functionality happens under the hood of any
    class extending React.Component and this means we only have to add our functionality into the
    lifecycle events to make our components unique. This is why it is so important that we do not
    set state directly, but use setState, as that ensures certain lifecycle events will be called
    as they should be. 

3.  What is a Higher Order Component?

    A higher order component is essentially a wrapper for another component. It gives that component
    additional functionality without having to change it directly. The idea here is to keep things
    DRY, in that you can pass in a variety of components and they get the additonal functionality.
    The example I am most familiar with is for authentication. Wrapping particular components in
    an Authenticate HOC means the Authentication can be written once, and any components that should
    only display if the user has been authenticated will display. Otherwise the the login screen 
    will display.

4.  What are three different ways to style components in React?

    1.  Regular CSS
    2.  CSS Preprocessors like SASS and Less
    3.  Styled components