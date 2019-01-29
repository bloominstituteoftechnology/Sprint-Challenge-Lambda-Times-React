[ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes define the type of Prop. It helps to validate a value which is passed to prop, blocking invalid entry. Also, it serves as a reference by listing all possible parameters that can be passed to a prop. It's difficult to track input parameter's data type without PropType (for instance, 123 could be an intergeror a string) 

[ ] Describe a life-cycle event in React?

First, there's Mounting stage where an event is prepared/setup ; next comes  Updating  stage, where a component can be updated, and finallyUn-Mounting- where component is not needed and terminated.

[ ] Explain the details of a Higher Order Component?

 It's a pattern that is used to resuse react components - function that accepts a component and creates a new component. It helps to avoid multiple repetitions with the same patterns of the very similar comonents in big applications by reusing common components and only modifying data sources / smaller items.

[ ] What are three different ways to style components in React? Explain some of the benefits of each.

Inline styling - potentially easier to troubleshoot and change, since formatting is tored within component, best work for small number of styling items.
CSS Modules - best work for big applications, allow centralized storage and maintenance, 
Styled Components - styled-components lets you write actual CSS in your JavaScript

