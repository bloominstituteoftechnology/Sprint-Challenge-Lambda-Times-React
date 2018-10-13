1.  What are PropTypes used for?
PropTypes are used as a way to validat your data as it comes in.  PropTypes allows you to set the type of data that is supposed to be returned, so that the browser warns you when the correct data is not recieved.  Without breaking your app.

2.  What is a lifecylce event in React?
The lifecylcle is the Birth, Growth, and Death of a component.  The sections consist of the birth section, where you can use ComponenetDidMount and Render.  Followed by the growth section for more Rendering and any component updates that need to be done.  Just before the component is gone from your screen you have the death events like ComponentWillUnmount.

3.  What is a Higher Order Component?
A HOC is a component that takes another component (or class) as an argument and does something with that component.  It is similar to a higher order function like .map(), .filter() and .reduce().

4.  What are the three different ways you can style components in React.
You can use regular good ol fashion css sheets and add them to each component, or through out the file tree as you see fit.  There is also styling with 'styled-components'.  Styled-components is a library that allows you to write css in jsx, which is then imported into the files that you need.