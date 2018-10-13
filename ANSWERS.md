Questions:

    1. What are PropTypes used for?
    PropTypes are used for type checking props to verify that the data is what is it suposed to be. 
    We try to stick with immutability when working with data(create new data as opposed to changing data values). 
    PropTypes are only used for development. It also has a powerful way to verify complex objects using shape.
    
    
    2. What is a lifecycle event in React?
    Functions such as  ComponentDidMount, ComponentWillMount, ComponentWillUnmount, allows components to be 
    mounted/unmounted from the DOM. Also they can be used to control data that we want to change and therefore tie
    to state.
    
    
    3. What is a Higher Order Component?
    A HOC transforms a component into another component using composition(a functioban that takes a function as an input 
    and returns anohter functionas output). Essentially, a component can have additonal functionality added to it 
    via a HOC. Also, like a closure, unique state can be tied to each new component using this powerful approach. 
    
    
    4. What are three different ways to style components in React?
        i) Old school CSS
        ii) Inline style(not recommended for maintainability)
        iii) Styled Components
        iv) Reactstrap, Bootstrap, etc. and combinations of these
 