1.  What are PropTypes used for? 

PropTypes is a way to guarentee that the right type of props is passed to a component, and the receiving component is receiving the right
type of props. Basically PropTypes can be seen as a built-in quality assurance checker for catching bugs

2.  What is a lifecycle event in React?

A React lifecycle consists of birth(pre-mounting), Updating and Death(unmounting) The component is built in the mounting phase and renders on the page, Updating happens when
something is changed or added and gets rendered on the page. Death occurs when the component unmounts and is removed from the page.

3.  What is a Higher Order Component?

A higher-order component is a function that takes a component and returns a new component. You can build a function, and wrap the other components in your Higher Order Component instead. For example, you have three files in your application these files contain data that will be loaded in the application. You want to give the ability to search the data loaded from the files. You could implement a search feature in all three of the components, but as the application grows it becomes cumbersome and prone to problems. Thus, creating a Higher Order Component would allow you to wrap everything into one.

4.  What are three different ways to style components in React?

Regular CSS file, inline styling and styled-components.