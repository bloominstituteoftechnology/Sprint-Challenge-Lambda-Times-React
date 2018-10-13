# Answers

1.  What are PropTypes used for?

    * Proptypes are like variables and they hold attributes that we can pass from a **parent component to a child component**. The children **cannot** pass props to a parent. The best way to imagine how props are inherit it's like a cascade props can only go down stream but not against it. Now that we know what they are we can now know what they are used for. We use them to set dynamic data to our components (pretty cool huh?). Let's say we got in our state a number that everytime we press a button it adds 1 to the state since state is changed everytime it will re-render passing the new value through props and we can see that data changing.

2. What is a lifecycle event in React?

    * Lifecycle events can be described as the birth, growth and death of the component (components can die!? :scream:). With these lifecycle events we can determine what the component does in each step of it's life just like playing a Sims game. This is very useful to set initial data to the state of the component as an example.

        ```
        export default class Content extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    selected: 'all',
                    tabs: [],
                    cards: []
                };
            }

            componentDidMount() {
                // Once the component has mounted, get the data and reflect that data on the state.
                this.setState({
                    tabs: tabData,
                    cards: cardData
                });
            }
        }
        ```

3. What is a Higher Order Component?  

    * It's an advanced technique and a bit tricky to understand but barebones explanation is a function that takes a component as a parameter and returns a new component for example 

        ```
        const EnhancedComponent = higherOrderComponent(WrappedComponent);
        ```
    * They are useful because some components follow similar patterns and with HOC (Higher Order Components) we can cut lines of repeated code and keep our source dry. 

4. What are three different ways to style components in React?   

    * Good old CSS: We can create a stylesheet and just use className inside the component to style accordingly like the old way.
    *Preprocessor: We can use a preprocessor like LESS and style our components. The new create-react-app 2.0 guides us on how to do this easily since they incorporated use for it.
    *Styled-Components package: This is a package we can install to our project that let's us use a more React way to style our components and uses a LESS type of way of doing things. Also is more visually appealing because instead of seeing <div className='foo'> We see <Foo>.