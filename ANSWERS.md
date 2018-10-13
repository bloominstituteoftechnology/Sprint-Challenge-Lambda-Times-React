# Answers

1.  What are PropTypes used for?

    * Proptypes are like variables and they hold attributes that we can pass from a **parent component to a child component**. The children **cannot** pass props to a parent. The best way to imagine how props are inherit it's like a cascade props can only go down stream but not against it. Now that we know what they are we can now know what they are used for. We use them to set dynamic data to our components (pretty cool huh?). Let's say we got in our state a number that everytime we press a button it adds 1 to the state since state is changed everytime it will re-render passing the new value through props and we can see that data changing.

    