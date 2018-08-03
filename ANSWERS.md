1.  What are PropTypes used for?

    In a React application, data can be pulled in from local storage or from an api, data can also be created by a user and attached to a component.  Data can be passed from one component to another.  Using PropTypes is a way of ensuring that the data are appropriately classified.  For example, if a component uses an array method, the data passed into that method will need to be compatible.  If a method takes in a string, the data should be classified as such.  PropTypes take care of this classification, which can, in turn, avoid errors as the app is rendered. 

2.  What is a lifecycle event in React?

    The lifecycle in React is related to the underlying motivation of the React ecosystem, which is to store data only for the period over which it is relevant.  The lifecycle refers to the stages a component can go through in the process of contributing to the user interface.  The three main stages are 
    a. The mounting stage is where the component is constructed, gains properties and is rendered for the first time. 
    b. the update state is where the component can be modified in the sense that it can take on new properties and have it's state set under new conditions.  During this stage the component can be re-rendered to manifest any changes that have been made. 
    c.  the unmounting stage refers to the end of the component lifecycle, the component is then no longer active in the UI. 

3.  What is a Higher Order Component?

    Higher order compoenents are components that take in other compoenents/functions as arguments.  When we built the authenticate component (a higher order component), we essentially built a component that distinguished between two possible pages to display (both of which were components themselves). Based on certain criteria, the authenticate component took the appropriate action -- if a username was in local storage, the app was displayed, if no username was in local storage the login page was displayed.  

4.  What are three different ways to style components in React?

    a. Components can be styled with usual css either built into the html or in a separate css file.
    b.  Including the bootstrap, reactstrap library in an app is another way to style components.  This involves writing the html so that classes correspond with those in the libraries.
    c.  We can also use 'styled-components' which allows the developer to essentially create a new variable that becomes an element tag, apply styles to that element and then enclose the content to be styled within these element tags. 