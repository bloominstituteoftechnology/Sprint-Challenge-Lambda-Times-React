1.  What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    Proptypes is a small library that provides a -- in my opinion, clunky -- way to enforce semi-strict type checking on the values passed through props in your React app; it also allows you to specify default values for your props in the case they aren't provided. Type checking is a useful feature that has native support with any statically typed language, such as Java, C#, Elm, etc. The main advantage of manually specifying your types is that it allows your compiler to politely slap you on the wrist when you pass the incorrect data structure/primitive value to a function, constructor, or anything else that receives inputs. Dynamially typed languages, such as Javascript, don't have this extra layer of support, so if you make a silly mistake like passing a string representation of a number to a function that expects an int, then a sneaky undefined bug will crawl into your application and start laying eggs. You can think of type checking as a fly trap for a (large) subset of your application's bugs. In other words, it allows you to preemptively catch bugs, and in the case that they still manage to sneak in, they won't gain much traction before they get spotted.

2. Describe a life-cycle event in React.

    Life-cycle hooks are methods on React class components that can be called to update the UI and application states. If birth, growth, and death are the three stages of a human's lifecycle, then the React component counterpart would be mounting, updating, and unmounting. These are three broad categories that embody multiple lifecyle methds, such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. One common use-case of the componentDidMount life-cycle hook is to fetch data from an API and inject it into state after the component get's painted to the DOM. One disadvantage to using life-cycle hooks (among a few others), is that the logic contained insinde them isn't composable nor reusable. I won't go on a rant as to why the new Hooks API is at least 10x better, but I will say that there's a newer, cleaner way to handle a component's lifecycle in React, and the best part -- it doesn't require classes!

3. Explain the details of a Higher Order Component

    A Higher Order Component is essentially a wrapper for another component. A HOC is to a regualr component what `Array.prototype.map` is to it's first argument (a callback function). Higher order components are very useful for injecting functions, state, and additional data into components as props, as well as wrapping components with styling or more JSX. According to a medium article I read,  "Using HOCs allow us to only extend the components that need to be extended, while at the same time keeping your codebase modular by separating specialised logic from component implementations." In a nutshell, a higher order component is a tool that you can use to more powerfully *compose* your React components. 

4. What are three different ways to style components in React? Explain some of the benefits of each

    1. CSS: 
        You can write all your components' styles in a CSS file and import those files where needed. Most people prefer this method becuase it's been traditionally taught for many decades that it's best to separate your application's structure (HTML), styles (CSS), and behavior (Javascript). This allows for a more cleaner, human-parsable codebase that easy to fix when a bug appears, or extend as your product sclaes. React already broke the rules by mixing your HTML and Javascript with JSX. Don't commit any more heresy by mixing in styles too! (Says several generations of web developers.)

    2. Inline Styling: 
        React allows you to write inline styles in your JSX using the `style` prop, the same way that HTML allows you to inline your styles using the like-named attribute. For reasons mentioned previously, this is widely disdained by the mainstream. However, the most powerful feature of doing it this way in JSX, is that it brings the power of templating engines into your styles; so techniques like interpolating values, or conditionally applying styles based on application state, can be more easily expressed.

    3. Style libraries: 
        Another way to style your components is by incorporating a third party library or UI Kit, such as `React Strap` or `Styled Components`. I'll give more attention to the latter since it differs in approach/philosophy from the rest of the discussed methods. With Styled Components, you get all of these benefits while still writing the CSS you know and love, just bound to individual components. Here are a few advantages of using Styled Components (pulled straight from their official documentation):
            - Automatic critical CSS: 
            your users load the least amount of code necessary.

            - No class name bugs: 
                styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.

            - Easier deletion of CSS: 
                it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
            - Simple dynamic styling:  
                adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
            - Painless maintenance:
                you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
            - Automatic vendor prefixing: 
                write your CSS to the current standard and let styled-components handle the rest.

    