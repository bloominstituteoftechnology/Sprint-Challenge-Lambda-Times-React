1.What are Prop-Types?
 
 
 Ans.PropTypes ensure that the right type of props is passed to a component — and, conversely, that the receiving component is receiving the right type of props.
   We know that javascript is dynamic in writing hence chances of error is high while entering data types and can easily corrupt the program. 
    PropTypes defines type and which props are required for the user to enter leaving no chance for errors.
    This benefits the future for us and other developer using our component. 
   
2. Describe a life-cycle event in React? 
   
   Ans.React enables to create components by invoking the React.createClass() method which expects a render method and triggers a lifecycle that can be hooked into via a number of so called lifecycle methods.There are Four Phases in React Life-cycle;
         a)Birth or the Mounting phase-
   
           This is the phase when the component is being built out from ground up.Whatever initial data we have access too will be defined on the constructor of this phase.
           rendermethod is invoked and componentDidMount gets called as well.
   
   
        b)Growth/Updating Phase-
          setState can be used to change the component’s state data, forcing a call to render.
   
   
       c)Death/Un-mounting Phase
   
          Component is removed from the screen.ComponentWillUnmount is called and can be used for any clean up we  might need to do.
          

3. Explain the details of a Higher Order Component?
   An HOC is a function that receives a Component as an argument and returns a new component.The very purpose of a Higher Order Function is the  capability of reusing component logic.We can  encapsulate some shared functionality between components and avoid repeation. HOC’s take in a component as an argument and then add some functionality to that supplied component and return it.In addition to that we can use HOC  to act as a container for other components.
   
4. What are three different ways to style components in React? Explain some of the benefits of each.
   
   a)Inline /Jsxinline- quick ,high specificity
   
   b)Bootstrap/Reactstrap-Readymade,quicker and easier
   
   c)Styled component: StyledComponents is extremely adaptable.We can customize as per our need,highly maintainable and easy .No repeatitions.                