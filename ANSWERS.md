1. What are PropTypes used for?
   -they are used to help developers catch bugs, create a better UI experience by ensuring clients don't get errors or problems when using the app, it makes sures the type of data we want used in our components is the correct type.

2. What is a lifecycle event in React?
   -The lifescycle has three phases, Birth/Mounting, Growth/Updating, and Death/Un-mounting. Mounting has the constructor defining initial data, render method is invoked, and calling componentDidMount. Growth has setState being used and will recall the render method to update the DOM based on what was updated. Lastly the Death phase uses componentWillUnmount to remove a component from the screen.

3. What is a Higher Order Component?

- HOC's are advance React patterns that we can use to design components that have use same/similar data or have a similar functionality/behavior, but using just state and props isn't enough. Essential we can use component logic repeatedly. So we can use a component as an argurment and return new componenets.

4. What are three different ways to style components in React?
   1.) vanilla CSS and/or inline styling.
   2.) LESS or some other pre-processor
   3.) styled componenets
