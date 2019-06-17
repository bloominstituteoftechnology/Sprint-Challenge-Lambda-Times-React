- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes are used to check incoming data, and check that it matches what you are expecting to receive. This is useful because it gives you a flag in your console to determine if the data is shaped the way you are expecting. This can help prevent errors utilizing this data in your JavaScript.

- [ ] Describe a life-cycle event in React?
    ComponentDidUpdate is one of the life-cycle events that occurs whenever something in a component is updated or it's state is changed. 

- [ ] Explain the details of a Higher Order Component?
A higher order component is a function that takes in something and returns a function or component in response. It is the top layer of a function that returns a function.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
1. Style via CSS files
    - Everyone should know/understand CSS. It's a very basic and almost universal language of styling, with heaps of documentation around it. It's very straight forward to read, with no short-cuts. 
2. Style via Styled-Components
    - Styled-Components allow you to build your styling directly in your JavaScript files. It allows for you to easily build upon parent components to create style added on top of it. You can ternary's to add really clean secondary classes to a styled component.
3. Style via Reactstrap
    - ReactStrap is very quick to code in. It has many short-cuts you can use, and preset styles that are accessible with just a couple of keystrokes. Something that might take 40 characters+ in CSS would take just 6 letters with reactstrap.