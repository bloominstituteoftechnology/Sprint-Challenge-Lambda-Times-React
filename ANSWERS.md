1. What are PropTypes used for? <br>
Because JS is loosely typed, we don't have to specified what type of information we're storing in a given variable. While this enables a ton of flexibility for developers, the lack of strong typing can also cause unexpected behavior. In cases where we want to disallow such behavior, we need to enforce typing. In React, PropTypes enables us to do this type-checking. We can define what props our component needs and what types they should be.  
<br><br>

2. What is a lifecycle event in React?<br>
The life of a component in React spans from birth (pre-mounting) to death (unmounting). Within this lifecycle, there are events related to mounting, updated, and unmounting. By using lifecycle methods during these events, we can exercise granular control over what's happening to our component state at any given time. 
<br><br>

3. What is a Higher Order Component?<br>
A HOC is not really a component at all, but a function that accepts a component as an argument and then returns a function. This pattern can is used to add data and functionality to other components without rewriting code. It often appears in authentication components, as well as "connect" in Redux and "withRouter" in React Router.
<br><br>

4. What are three different ways to style components in React?<br>
We can use vanilla CSS, we can use preprocessors like LESS, or we can write CSS in JS. This week, we used "styled components" to write our CSS in our JS files. However, there are other solutions to the same problem, such as glamorous.