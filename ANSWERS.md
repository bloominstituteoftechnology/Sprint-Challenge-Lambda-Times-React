1.  What are PropTypes used for?

    PropTypes are used to confirm that the data passed in to a component is the right type of data. It helpes to catch any bugs during development so that deployment can go that much smoother.

2.  What is a lifecycle event in React?

    Hopefully I'm understanding the question. A Lifecycle event in React are all the steps a component takes from mounting(birth) to unmounting(death). 

    Each component goes through all 3 steps no matter how long the lifespan is of that component. They may not need to use all the functions described in each step such as cDM or componentDidUpdate, however every component goes through the mounting phase, updation phase(even if it never gets updated with new info) and the unmounting phase at some point.

3.  What is a Higher Order Component?

    It seems like anything of Higher Order in JS is an object that takes in an object of the same type as a parameter. So just like a HOF (Higher order Function) is a function that takes in another function, a HOC is a component that takes another component as a parameter.

4.  What are three different ways to style components in React?

    - CSS stylesheet
    - Inline styles
    - Styled-components library
    - External CDNs such as Bootstrap