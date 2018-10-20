

Questions:
What are PropTypes used for?

Answer: PropTypes are used to check the data-type of an incoming prop, received from another component. For example, if my component is receiving props from another component and is passing in an array of objects (a dataset), I might receive strings, numbers, boolean, arrays or objects, and so i'd want to set up PropTypes to check the type of data being passed in from a parent component. This allows us to more easily catch bugs in our code before they get passed beyond one level. 


What is a lifecycle event in React?

Answer: A lifecycle event revolves around three phases in a react project: Mounting, Updating and Unmounting - these events have to do with the 'state' of the data. When a component is initialized, it renders a piece of UI, the componentDidMount() function will allow us to see what the initial 'state' of the data is, and what kind of data it is receiving (if any) from a parent component. Once the user interacts with that component, the state may need to update (i.e., user input some data) and the Updating phase of the lifecycle happens. 

After that, the application may move onto another component, in which the previous component will un-mount off screen.

What is a Higher Order Component?

Answer: A HOC is a function that passes another function, thus "giving" the function that is passed some new functionality. This allows us to write a HOC once and pass its' functionality to many other components. It's an advanced design pattern that allows us to write DRY code in React.  


What are three different ways to style components in React?

Answer: 
First way: In-line style in the component.
Second way: Separate CSS file. 
Third way: CSS-in-JS way - styled-components, which is the React way. 