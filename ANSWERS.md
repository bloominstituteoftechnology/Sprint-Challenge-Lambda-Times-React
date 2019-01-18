## What are PropTypes used for? Please describe why it's important to type check our data in JavaScript. 
PropTypes are used to type check our data in a react application.  They make sure that the data being passed into a component which is going to do something with that data is of the right type so that we can correctly handle it.  Without type checking, it would be very hard for future developers to understand the flow of data in an application.  PropTypes therefore aren't 100% necessary, our application will work without them, but they are very important for maintaing a codebase.

## Describe a life-cycle event in React?
A life-cycle event is a method that runs as a component is being mounted/unmounted from the DOM.  They are used during the 3 strages of the life-cycle (mounting, updating, death).  componentDidMount is used at the mounting stage and is best for fetching data via an API.  componentDidUpdate is called after the render() method after each update.  Finally componentWillUnmount is called when the component is being removed from the DOM.

## Explain the details of a Higher Order Component?
A higher order component (HOC) is simply a component that instead of returing some content to the screen, returns another component.  They are best used for conditional rendering of components or adding functionality to existing components.

## What are three different ways to style components in React? Explain some of the benefits of each.
1.  Importing a .css file and hooking into class names.  This keeps our application separated into files for styling and files for logic.  JS files can get very long and difficult to navigate if they contain both logic and styling.

2.  Using styled-components library and writing the css inside of our JS file.  This makes our file structure a bit easier to navigate as there are not separate .css files for every component.  It also lets us use some of properties of css preprocessors like nesting css, making it easier to write. 

3.  Using another 3rd party such as reactstrap and using their pre-definded styles for elements.  Using pre-defined styles, we significantly reduce the amount of css we need to write.  Reactstrap has a huge library of stylized components which we can simply plug into our application and not have to worry about styling each element in our code.