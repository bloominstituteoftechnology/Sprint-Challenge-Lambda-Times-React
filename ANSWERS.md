- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes ensure that the right type of props is passed to a component — and, conversely, that the receiving component is receiving the right type of props. Type checking in jS is important b/c it will help cut down on the number of bugs when running code.

- [ ] Describe a life-cycle event in React?

  initialization -The initialization phase is where we define defaults and initial values for this.props and this.state;
  mounting - Mounting is the process that occurs when a component is being inserted into the DOM.
  updating - When a component data is updated, the component will then rerender with the relevant data.
  unmounting - once a component has served its purpose it'll be removed from the DOM and all running processes associated will be terminated (event listeners, ect.).

- [ ] Explain the details of a Higher Order Component?

    A HOC is a function that receives a Component as an argument and returns a new component Source. This paradigm allows us to encapsulate some shared functionality between components and avoid repeating ourselves.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
      - standard CSS stylesheet - Basic method, easy to learn easy to read.
      - styled Components - do away with the stylesheet, ensure only intended components will be sytled.
      - Using a jS library such as ReactStrap. There you can find prestyled components to use throughout your app.
