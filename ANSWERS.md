1. What are PropTypes used for?
PropTypes are used for validating prop data that is being passed around. This is useful for
testing along the way as the app is being built, to make sure the data is what is expected.


2. What is a lifecycle event in React?
A lifecycle event is part of the order that React runs. The app starts to run and set up the DOM. componentDidMount is when the app is loaded and the DOM is set up - here is the best time to load external data, and create things that rely on the DOM. It goes on from there to accept props, update/render and finally componentWillUnmount for closing the app.


3. What is a Higher Order Component?
A HOC is a function that takes in a component and returns a new component. Useful for determining which page to route to a user (such a a login form if a user is not logged in, and the content if the user is logged in)


4. What are three different ways to style components in React?
Inline CSS - Directly in the JSX/HTML code using camelCased style names.
CSS - Standard CSS files included in each component
Styled Components - component level styles that can be included or directly located in each component file.