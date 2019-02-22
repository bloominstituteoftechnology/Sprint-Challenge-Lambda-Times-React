###  What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to type check data that are being passed through a components props to ensure the right data is being passed, or that the data is even being passed.
They also help prevent an entire application from failing by preventing the component they are checking from interferring with other components. 

### Describe a life-cycle event in React?

A React life-cycle event is the "birth, growth and death" of a component/state. The birth portion deals with establishing state in the component such as loading in data and assigning it to the component. The growth is how the component deals with state/data. Its where state is manipulated and/or updated in response to the behaviors of the component. The death is when state is completed and the component is no longer needed and thus removed from use until needed again, and the cycle begins again.


### Explain the details of a Higher Order Component?

The HOC pattern takes a component and returns a component. It is a pattern that helps with scaling components and minimizes repetitive components that can become tedious to maintain as an application grows. 


### What are three different ways to style components in React? Explain some of the benefits of each.

3 different ways of styling a component are using "vanilla" CSS, a pre-process, or a styled-component. Pre-Processors offer the ability to use CSS similarly to a coding language, it allows to the user to "code" out CSS so that makes scaffolding out css markup faster and more functionally, It also allows the coder to compartimentalize their style sheets to only their components. Styled-Components are similar to Pre-processors but allow the coder to actually turn them into components. Using them as components makes updating, styling, and making changes to a component easier. It also allows the porting or inhertiance of a component into every other component. After using pre-processing and styled-components, I really dont see the benefit in vanilla CSS other than habit.