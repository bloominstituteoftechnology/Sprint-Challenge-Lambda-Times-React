1.  What are PropTypes used for?
PropTypes are what we use to export a number of validators to check the data that your recieving is valid and the type that you want.  For example, in a  piece of code, you have an input that you want a user to enter their birthday. Proptypes come in handy bc we can make sure that the user sees an error if they put the wrong type of data in. So the program does crash and burn bc someone put in the string month in stead of the 2 digit month. 

2.  What is a lifecycle event in React?
The React Component life cycle is broken down into three phases birth, growth, and death. In the birth phase the component is being built from the ground up. Our data is being constructed and our render function is invoked displaying the information in the view. The grow state is when the component is updated in some way. For example we can use the setState method in this phase to change the components data. This will force a call to render. The death phase is when the component is removed from the screen.

3.  What is a Higher Order Component?
Higher order components are functions that receive a component as a parameter and returns new information. Like when working on our project we used a higher order component to conditionally render a component based on where or not a user was logged in. We performed this check by seeing what was loaded in local storage. Using that information we can decided to load either one component or another. We can also used shared functionality among components to help avoid repetition.

4.  What are three different ways to style components in React?
We can style components in react by using plain css imported from a css file. We can use the bootstrap library to add in custom styles. We can also install a package referred to as styled components. This will give us the ability to style our components in Javascript.