- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes defines type and which props are required. They enable us to make assertions about the type of data a React component requires in order to render properly. It also makes it a lot easier for other developers to look at your code and understand what a component is taking in as props. 



- [ ] Describe a life-cycle event in React?

React lets us define components as classes or functions, and the methods that we call on these are life-cycle events. These can be called during the life-cycle of a component, and they allow us to update the UI and application states. 

The life-cycle consists of 3 phases: Mounting, Updating, Unmounting. these phases are often used with the componentDidMount, componentDidUpdate, and componentWillUnmount methods. 

- [ ] Explain the details of a Higher Order Component?

A Higher Order Components is a function that takes in one or more components as arguments and returns a new component. It is a technique for reusing component logic.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

We can use the standard method of good old CSS individual files for each component. Additionally, we can use inline syles so that each component is more self-contained and components to all hold their own styles. Thirdly, we can use a library like Styled Components where you're no longer styling HTML elements or components based on their class or HTML element. Instead we have components which possesses their own encapsulated styles. 

