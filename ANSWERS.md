1.What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
	PropTypes in React are validators used to type check the props in your react app. It’s important to type check the data to ensure that they right type of data is being passed to the correct location.
2.Describe a life-cycle event in React?
	Life cycle events in react are the phases of the components life. In the Mounting phase the render method is invoked and the componentDidMount method gets called. In the Updating phase setState can be used to update a components state date, which causes the render method to be called again. In the Un-mounting phase the component is removed from the screen and componentWillUnmount is called.
3.Explain the details of a Higher Order Component?
	HOCs give you the ability to reuse the logic of an already created component. It receives a component as an argument and returns a new component.
4.What are three different ways to style components in React? Explain some of the benefits of each.
	Vanilla CSS file imported into the react component. This has minimal set up.
	Use a library like reactstrap. Pre built components ready to go.
	Use styled components. Has high customizability and allows the use of props in the styled components.
