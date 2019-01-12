[ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are library of code that allows developers to type check values that are passed around in react. They are important because they allow developers to control the data type of values that are passed into components, thus: reducing bugs, decreasing debug time, and ensuring increased successfull run attempts.

[ ] Describe a life-cycle event in React?
A life-cycle event is one part in a series of events that make up the 'life' of a React component. 

There a handful of life-cycle events in react, each with their own purpose. These event run in the background, allowing a component to run. These events range from: setting the initial environment of the component, rendering the components initial values to the screen, to re-rendering once there has been confirmation of the component rendering once, to updating the screen once there has been a confirmed change in the component's state, and disabling the component once its no longer needed.

[ ] Explain the details of a Higher Order Component?

A higher order component is a component that takes in another component as its parameter, and then returns a class component that returns and renders the component that was passed in. The main reason for this is that when developers can attach new data in the form of props to the passed in component from the return class component. Thus, allowing the developer to expand the base component.

[ ] What are three different ways to style components in React? Explain some of the benefits of each. 

Three different ways to style components in React are: CSS(inline/external), bootstrap/reactstrap, and styled components. Vanilla CSS allows for quick experimentation without having to install anything extra. Bootstrap/reactstrap allows for quick builds of quality styling due to the vast base of styles built into them. Styled components allow for css-like syntax styling straight into the javascript file itself.