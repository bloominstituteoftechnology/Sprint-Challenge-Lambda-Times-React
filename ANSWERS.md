1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes are helpful for when you wan't to remember what a component needs to take in as props. It also makes it a lot easier for other developers to look at your code and understand what a component is taking in as props. 

2. Describe a life-cycle event in React?
React life-cycle events result in how your component loads and much more. The React life-cycle consists of 3 phases that are Mounting, Updating, Unmounting, these phases are often used with certain react methods such as componentDidMount(){}, componentDidUpdate(){}, componentWillUnmount(){}. This makes it easy for us to understand how react renders components and how we can make our applications interactive.

3. Explain the details of a Higher Order Component?
Higher order components is a function that takes in a component(or multiple) as an argument and returns a new component with either some modifications/added functionality or renders a conditional view based on state or props.

4. What are three different ways to style components in React? Explain some of the benefits of each.
You can either create individual css files for each of your components than import them on a component level, or use CSS in JS which allows your components to all hold their own styles and basically eliminates bleeding styles
