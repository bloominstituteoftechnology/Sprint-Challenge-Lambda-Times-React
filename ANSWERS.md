[1] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

A react application has many mnay components, those components get many specific props and can be a multitude of different data types. This creates amazing flexibility and applications; however, also many issues. Let's say I borrow a component from another developer, I'd have to figure our and dissect how it works and what kind of parameter it was designed for. This is where propTypes are important. PropTypes layout out types and all the sxpecifications we tell it to. What's particularly nice about this is that you can quickly determine which props are necessary and their respective types. In addition, you get a more imformative error message when things go wrong, it's very specific.
[2] Describe a life-cycle event in React?

A life cycle of a component is what make React apps reactive. A component makes API requests and renders the page depending on the data received/user interaction. There are 3 phases: Mounting, Updating and Unmounting. (1) the mounting phase is when the component is built from the ground up, initial data you'll have access to will be defined on the constructor of this ophase, render is invoked and so is componentDidMount. (2) Updating phase is when you can use the setState method to change the state of a component which in turn inbokes render again. (3) Un-mounting is exactly what is osunds like, component will be removed and componentWillUnmount is your method here.
[3] Explain the details of a Higher Order Component?

Esssentially, a HOC is a function that takes in a component as a parameter and returns a new component. So it makes one component and makes it into another. This is useful when you want to pass on functionality to more components. They don't necessarily have to do the same thing but the logical gymnastics are the same and can be applied.

[4] What are three different ways to style components in React? Explain some of the benefits of each.

(1) You can simply use a CSS stylesheet, which is essentially another file that's imported. This is pretty straightforward.

(2) Inline styling, this does not require a separate file like the latter. This is normally specified with an object. Pros of this is that it has very high specificity.

(3) Styled-components, this is a library that you install and import. These all have pros and cons but ultimately it comes down to personal preference.