
What are PropTypes used for? 
they are a type check system, similar to other type frameworks like typescript and flow. It is not part of create-react-app anymore so you need to add it, once you do, you import and and now you can check the type of data that is being passed around as props, it helps developers avoid bugs, and gives hints to what data is being used in a component


What is a lifecycle event in React? 
It is the birth and death of components, you can use lifecycles to you advantage, you can manipulate data and add functionality on certain life cycles, like doing async functionality. Life cycles go in order, and two of the lifecycles only happen once, the componentdidmount and componentwillunmount, the changing of components can happen multiple times during a lifecycle


What is a Higher Order Component? 
they are just like higher order functions, they have the ability to take anohter component as an argument, do some logic with it, and return a new component, you can pass in different components to hocs with similar functionality


What are three different ways to style components in React?
you can use good ol css, you can add a UI library like styled-component, you can also use preprocessors to style

