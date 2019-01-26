What are PropTypes used for?

It's a functionality that extends React. It validates data when a component is being built. It's important because it helps the components be safe from mistakes developers commonly make (ie: having a different data type than intended);

Describe a life-cycle event in React?

A lifecycle event in react consists of 3 phases: Mounting, Updating, and Un-mounting. The mounting phase is when the components are being built and the initial data are defined as well the the very first render method is called. The updating phase occurs when methods like setState method is called in which the state's data is changed and a re-render must occur. The final phase is the un-mounting phase in which the component typically removed from the screen and event listeners and other network requests are cancelled.

Explain the details of Higher Order Component?

Higher Order Component (HOC) is an advanced React pattern that allows us the capability of reusing component logic. It allows use to have some shared functionality within components since HOC takes in a component as an argument and add some functionality to that component and return it.

What are three different ways to style components in React?
Inline, CSS Libraries and External CSS. The benefits of using Inline is that the specificity of each style is strictly for that specific styling. It is however very repetitive. External CSS is usually how most developer style (through importing their stylesheets) It's benefit is the familiarity of most developers in using it but it's disadvantage is through all style rules are usually globally scoped (converging commonly in the main App). The third way is through styling libraries like Bootstrap, Bulma, and Styled Components. It's an easy to use and comes out of the box methods to use it. However due to popularity of frameworks like Bootstrap, it comes with the disadvantage of most websites looking the same if no further changes in the CSS are made. 
