### Questions:

1.  What are PropTypes used for?
    PropTypes give us a way to 'type check' specific data being passed down to a child component.
    As a result, we can use them to find more bugs before they happen due to the fact that we
    are ensuring the type of data that is being used.

2.  What is a lifecycle event in React?
    The lifecycle in react goes from the beginning to the end. Just as humans have birth, maturing, 
    and (depending on your personal beliefs) a way that the current existence ends, there are lifecycle events in React. React has mounting (birth), updating(growing/development), and unmounting the "end"
    of the lifecycle. Each one of these broad stages may also include smaller events.

3.  What is a Higher Order Component?
    Higher Order Components take in a component as an argument and returns a new component. This allows us to reuse these HOCs so we do not have to rewrite the logic. Example if we have log in pages we can use the HOC to display the login screen if a login has not been detected or to render the actual page if a 
    login has been detected. This HOC could be reused with multiple components in the App.

4.  What are three different ways to style components in React?
    1. The css file sheet with .css and put your css in there for the styling of the component.
    2. inline-styling using camelCase and '' for example
        import React from 'react';

            const styledDiv = {
            padding: '25px',
            border: '1px solid red',
            border-radius: '5px'
            };
    3. Styled-components are a great alternative to the previous 2 ways mentioned. With styled-components
        install the styled-components library, and then you can import the library to the component. Now we use double back ticks `` as tagged template literals. So the above code would look like this.
        import React from 'react';
        import sc from 'styled-components';

            const Div = sc.div`
            padding: 25px;
            border: 1px solid red;
            border-radius: 5px;
            `;
        The really cool thing about styled-components is that you can nest them similarly to how we do in 
        less (at least that is the part I like).
