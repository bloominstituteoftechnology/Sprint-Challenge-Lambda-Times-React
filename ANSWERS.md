- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes ensure that the datatypes being passed are the proper type. You would not want a 'String' of numbers when you should expecting actual numbers. It could ruin any math functions the component uses. It's not needed but it helps prevent bugs.

- [ ] Describe a life-cycle event in React?
As an overall view, the life cycle is a summary of the birth, growth, and death of a component with the changes in each stage. This means how the components are added to the DOM, Change within the Dom, and are removed from the Dom. The end of each phase causes a re-rendering of the webpage.

- [ ] Explain the details of a Higher Order Component?
HOC's are an advanced technique in React. We wont be learning them in depth here at Lambda but know enough to identify them out in the wild world of Software development! They Wrap around components to do additional things. One example is where a component takes in two components and uses them to output a single component.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
  1) You can used an external CSS Stylesheet. This is recognizeable by anyone who is familiar with web development.

  2) Inline Styles using JSX. This is helpful for component specific styling

  3) Use a styled component library. This is helpful because it helps with consistancy among all the components.
