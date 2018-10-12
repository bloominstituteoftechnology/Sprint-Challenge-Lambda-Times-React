
What are PropTypes used for?<br>
PropTypes is a built in React method that enables developers to make sure the right type of data is being passed in the application. There are several different "data types" that you can use to validate data available within propTypes. PropTypes is usually implemented by a developer to cut down on bugs, make the code more easily maintained, and make it more readable for other developers who may be working on the code base. It can also be helpful since JS has many surprising ways it will treat data if you don't restrict it, and PropTypes is one way to do that in React. 
<br>
What is a lifecycle event in React?<br>
React components have 3 main lifecycle events - mounting (data), updating(ui), unmounting (state dissolves). In each phase of a component's lifecycle there are specific lifecycle methods that can be used to invoke behavior that is conditional on a specific lifecycle phase state. <br>
What is a Higher Order Component (HOC)?<br>
Technically, an HOC is a react component that takes in another component(aka function) and returns a new component(aka function). It's a pattern of design popular with developers because of it's ability to make code more reusable. 
<br>
What are three different ways to style components in React?<br>
Components can be styled 1) using in-line styling, by first defining a style as an object and assigning it to a variable and then directly applying the style in the element tags as you would define any other prop 2)using in-line styling by importing a styled-component library which uses a mix of JS and CSS, to define styles as a function held in variables, and then pass the style to an element by wrapping it in a tag with the style name. Finally, 3)using traditional CSS, typically using one style sheet per component or 