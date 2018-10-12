1. What are PropTypes used for?
React web applications and UI's, from humble 'hello world' to enterprise Skynet-sized codebases, can become buggy very easily when using a dynamically typed language like Javascript. PropTypes, then, is a very useful tool to assure us as developers that the proper types of data/props (strings, numbers, booleans, etc) are being passed to our components. PropTypes allow us to set tests to check if the proper data type is being presented into a component. Not just with individual data/prop exchanges but with the "shapes", i.e. lists of the order in which data should be passed (ex: this component expects a string, a number and another string, in that order).



2. What is a lifecycle event in React?
A set of 3 stages in a React application: Mounting (birth), updating (evolving, growing), and Unmounting (death). 

The mount phase is the inital construction, the building of a component upon it's invocation. It's data access will be defined (setting up state and what can be grabbed for props) and the render method is executed. 

Updating, in which our component does it's thing: we can get props from state and more specifically adjust state with setState as the component 'evolves'.

Unmounting will remove the component from our application, as well as employing hooks like componentWillUnmount to do things like remove scattered event listeners that are no longer needed.



3. What is a Higher Order Component?
Higher order components are the same concept as higher order functions: HOCs are components which take in another component as an argument in order to do what it needs to do. It allows us to keep code "DRY" by sharing or combining logic or functionality from other components.



4. What are three different ways to style components in React?
First and foremost is with using Styled Components- a method of writing our CSS in JS, much like the way JSX allows us to compose our HTML in JS. This allows for very modular styling that can be affected or modified through things like props or other various JS logic. 

Second, would be good ol' CSS via a styles.css file(s), which could also be the same idea as using a preprocessor like LESS or SASS in that they are designed to combine multiple split stylesheets into one singular, monolythic file.

Lastly, if you hate yourself, inline styles would work, though it's awful to read and write, though it does have it's moments where it could be useful, such as writing up a quick prototype / code demo.


