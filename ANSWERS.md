## Self-Study/Essay Questions

[ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
[ ] Describe a life-cycle event in React?
[ ] Explain the details of a Higher Order Component?
[ ] What are three different ways to style components in React? Explain some of the benefits of each.

Proptypes are used to help check the data type to allow users to check for errors with ease, versus looking through the entire dataset. It is important because JS on its own assumes developers are aware of everything they are doing and there is no built in type checking. Proptypes allows developers to check for human errors.  It is important to check for data types to prevent your code from breaking from data sets or your own code you’re working on. 

A life cycle event consists of the birth/mounting phase, the updating phase and the death/unmounting phase. The mounting phase is when the components are being built and involves the initial data you are going to use, along with the render method. ComponentDidMount itself is called. The updating phase is like the “growth” phase in which setState is used to render data. The Unmounting phase is when the component is eliminated or removed from the screen. You can use componentWillUnmount here. 

A Higher Order Component (HOC) is like a component using another component as its argument. It is a sort of pattern that uses some behavior and similar logic to another component. It is essentially a reuse system. 


Three different examples of styling components consist of 1. styling css the traditional way through .css files and mapping it to the relevant components you’re styling via classNames and Ids. What is beneficial about doing it this way is that you can to work in a ‘traditional’ sense that also can be used for styling vanilla JS projects and match classNames and Ids easily via the names you define them as.  2. Styled Components - styled components are a css like styled component. It is my personal favorite now and I find it beneficial because you can define the components within the same file as your JS components. It looks a lot cleaner when coding since you have to use the variable name of the styled component to replace the divs in the js component. 3. React-strap, which allows you to utilize the bootstrap library and can make styling easier with their themed libraries. 

