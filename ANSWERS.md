[x] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
 PropTypes are a way to make difine what type of data your component needs to run correctly.  It is important to typecheck your data in JavaScript because if it isnt the right type of data it can break your APP
 
[x] Describe a life-cycle event in React?
componentDidMount is a life-cycle event in react that is called once a component is mounted to the DOM.

[x] Explain the details of a Higher Order Component?
A HOC (higher order component) is a component that passes another component.

[x] What are three different ways to style components in React? Explain some of the benefits of each.
1. Import a CSS file: Simple and hard to mess up, is used and reconized in the industry as a valid approach.

2. Use inline styling:  This gives high specificity when you need something to overwright other styling to look a specific way.

3. Use a UI Library like ReactStrap or Styled Components.  ReactStrap is quick and easy, allowing for quickly coded proof of concepts or production level sites to be build quickly while looking good.  Styled Components is similer as it is a UI library, however it allows some unique syntax that is particularly usefull for passing props while styling.