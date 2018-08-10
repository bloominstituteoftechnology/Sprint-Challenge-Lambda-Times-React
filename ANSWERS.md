  What are PropTypes used for?

Since JS is a dynamically typed language, it doesn't have any static types. To prevent bugs, you can use PropTypes to typecheck the data coming through your app and prevent the wrong type of data from breaking things.


  What is a lifecycle event in React?

All React components have lifecycles.  A cycle include mounting, updating and unmounting. Mounting involves starting up the component. Data gets defined on the constructor here. In the updating phase, setState can be used to change state. In the unmounting phase, the component is removed from the screen and componentWillUnmount can be utilized for cleanup.


  What is a Higher Order Component?

A HOC is a function that allows the capability of reusing component logic.
Specifically, a HOC is a function that takes a component as an argument and returns a new component. Typically components transforms props into UI, but a HOC actually creates a new component instead



  What are three different ways to style components in React?
  1. external CSS stylesheets
  2. styled-components
  3. Reactstrap