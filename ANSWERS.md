- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
- [ ] Describe a life-cycle event in React?
- [ ] Explain the details of a Higher Order Component?
- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

1. Proptypes are used to validated the incoming props. it makes sure that if you're expecting a string you dont get an array instead.

2. lifecyle is the the flow of functions that are triggered during the mounting of a component.

3. A higher-order component (HOC) is an advanced technique in React for reusing component logic. ... They are a pattern that emerges from React's compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component.

4. ```javascript
   const ExtendedComponent = styled(Component)`
     color: green;
   `;
   ```

   ```javascript
   import { createGlobalStyle } from 'styled-components';
   const GlobalStyle = createGlobalStyle`body { color: red; }`;
   ```

   ````javascript
   // later in your app's render method
   <React.Fragment>
     <Navigation />
     <OtherImportantTopLevelComponentStuff />
     <GlobalStyle />
   </React.Fragment>
   const Component = styled.div`background: blue; color: red;`

   // later in your render method
   <Component ref={element => { this.myElement = element }}>Something something</Component>```
   ````
