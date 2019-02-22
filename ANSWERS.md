1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  PropTypes are used for helping developers to manage the data that is used in a component.  When creating the component, it let's all of the developers on the team know what kind of data the component is expecting to receive.  If the component doesn't receive the data that is expected, you know there is either a bug or that either the component or the data that is coming into the component is wrong and needs to be fixed.  It's a useful tool when working within a group to insure that everyone knows what is supposed to go where.

2. Describe a life-cycle event in React?

  The lifecycle in react can be broken down into three main parts, Mounting, Updating and Unmounting.

    Mounting is when the component is initially constructed and rendered to the virtual DOM.
    Updating is when a method or function like this.setState() is called or new props are created, which will cause the component to rerender.
    Unmounting is when the component is deleted.  When a component is unmounted it should not be remounted later.  Unmounting should only be used when the component won't be used again.

3. Explain the details of a Higher Order Component?

  A higher order component(HOC) is actually just a function and not actually a component.  The HOC is used to share functionality between two or more components.  The HOC takes in one or more components as arguments and returns one component.  It can transform one component into another, while adding additional data or functionality.  It can also be used to switch between components.

4. What are three different ways to style components in React? Explain some of the benefits of each.

  The three ways we have been taught about are inline styling, css stylesheet styling and styled-components.
  
  Inline styling can be beneficial in that it is very obvious exactly what styles are on each element.  There are no surprises from having a specificity war with styles that are declared elsewhere. However it is not DRY coding, you have to repeat lots of code in many places, as well as making changes being very tedious and slow if you have a large application to maintain.

  CSS Stylesheet styling can be beneficial in that it is DRY code, it is well understood in the development community, with many tools available, and you can see the html and css you are working on at the same time.

  Styled-components are beneficial in that they are reusable and you can style parts of your web app in the same place that you create them.  It's kind of an inbetween for seperate css style sheets and Inline styling as far as benefits go.