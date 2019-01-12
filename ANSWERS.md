# Self-Study/Essay Questions

**What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.**
PropTypes are used to catch bugs during development by checking the type of data being passed as props.

One of the great things about Javascript is that the language itself isn't as picky about data types as other languages are. This allows the developer freedom, but with freedom comes the chances of making more mistakes. To prevent this in deployment, we must check it ahead of time. This saves developers time in the longrun.

**Describe a life-cycle event in React?**
Lifecycle methods are used to control when things occur in between the mounting (metaphorically, the birth of the app) and unmounting (metaphorically, the death of the app) of an app. This allows the developer to manipulate the timing of data flow. Each method runs at a different point in the "lifespan" of each component. For example, componentDidMount() runs _immediately_ after the component is mounted to the DOM, but componentWillUnmount() is run when a component is being removed from the DOM.

**Explain the details of a Higher Order Component?**
A higher order component accepts another component as an argument just like a higher order function can accept other functions as arguments.

After passing in the component as an argument, the first line of code extends the React.Component object, which allows the HOC to pass data to its children using state and props.

In the render method, the argument that is passed in above is rendered here. The rendering includes changes made to it by the HOC.

**What are three different ways to style components in React? Explain some of the benefits of each.**

You can use CSS. This is the fastest set up and the least amount of additional learning. There is no need to install anything extra for it to work. Unfortunately, the stylings here are global and compilers are not as easy to use with React as they are with HTML/vanilla JavaScript.

You can style elements using JSX in-line, but this has its limitations. You cannot, for example, use media queries or pseudo-classes here, like :hover.

Lastly, you can use a separate library like reactstrap or styled-components. The benefit here is that the styling is component specific, so now not only is the functioning of the app modular, so is the way it looks.
