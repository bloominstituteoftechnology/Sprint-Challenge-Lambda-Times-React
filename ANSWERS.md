What are PropTypes used for?

PropTypes exports a number of validators used to check the data that your recieving is valid. For example I can check if one data value is a number or a string. This really comes in handy because the javascript language itself is dynamically-typed. Dynamically-typed languages are those where the interpreter assigns the variables a type at runtime based on the value of that variable. With PropTypes we can check to make sure there was no mix-ups with our data. 

What is a lifecycle event in React?

The React Component life cycle is broken down into three phases birth, growth, and death. In the birth phase the component is being built from the ground up. Our data is being constructed and our render function is invoked displaying the information in the view. This is also where componentDidMount gets called as well. componentDidMount is a function that can take in additional logic or information after a page is loaded used for display. The grow state is when the component is updated in some way. For example we can use the setState method in this phase to change the components data. This will force a call to render. The death phase is when the component is removed from the screen.


What is a Higher Order Component?

Higher order components are functions that recieve a component as a parameter and returns new information. For example when working on our project we used a higher order component to conditionally render a component based on where or not a user was logged in. We performed this check by seeing what was loaded in local storage. Using that information we can decided to load either one component or another. We can also used shared functionality among components to help avoid repetition.


What are three different ways to style components in React?

We can style components in react by using plain css imported from a css file. We can use the bootstrap library to add in custom styles. We can also install a package referred to as styled components. This will give us the ability to style our components in Javascript.