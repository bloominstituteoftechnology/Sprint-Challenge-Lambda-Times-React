 1- What are PropTypes used for? Please describe why it's important to type check our data in JavaScript. 
    Props in a component can be type-checked using PropTypes. Without PropTypes, we run into the risk of passing in a wrong data type to a component, which could cause a crash or some unexpected behavior in the application.

 2- Describe a life-cycle event in React? 
  Life-cycle methods are special methods each component can have that allow us to hook into the views when specific conditions happen (i.e. when the component first renders or when the component gets updated with new data, etc).
  There are two categories of life-cycle methods. When a component get mounted to the DOM and unmounted, and when a component receives new data. Some of the methods are only called once: constructor, componentDidMount, componentWillUnmount. some methods could be called more than once: render, componentDidUpdate, ...

 3- Explain the details of a Higher Order Component?
  A higher-order component is used to share common functionality between components without repeating code. A HOC takes a component as an argument and returns a component. It transforms a component into another component and adds additional data or functionality.

  4- What are three different ways to style components in React? Explain some of the benefits of each.
    a - CSS Stylesheet: Simply import css file so you can have a separate css file for each component. Simple styling but have to make sure not to repeat class names.
    b- Inline styling: pass the styling directly using style={{color: 'pink'}} This is good if you just have to style a component and do not need to reuse the styling
    c- Styled-components: Styled-components is a library that allows you to use component-level styles in your application that are written with a mixture of JavaScript and CSS. 
      For example const MyDiv = styled.div`color: purple` 
    and then use it around other components like <MyDiv>---Other components---</MyDiv> 
    This is a good way to separate the functionality and styling.