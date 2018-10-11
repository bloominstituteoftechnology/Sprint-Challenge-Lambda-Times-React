### Questions and Answers:

1.  What are PropTypes used for?
  PropTypes are used as a debugging aid to type check the props that are set on a component. They are a great lightweight typechecking library that is stripped away during the build phase so that they do not encumber the overall production build. They are not as robust as using a transpilation unit language such as TypeScript or Flow but they are an excelent light weight alternative when you want to use minimal setup to workflow optimization.

1.  What is a lifecycle event in React?
  A Lifecycle event is one that happens when a component is being created (mounted) / destroyed (Unmounted) they can also be called by code that the developer writes to perform some desired task that would be deemd useful during the lifecycle of the application. A common action may be using the componentDidMount() lifecycle event to load in data to the application.

1.  What is a Higher Order Component?
  A Hogher Order Component is a Component that is built to take in a callback component as an argument in which it then uses to return the derived component based upon whatever logic is passed in to it. This in its simlest form could be passing in a component and returning it in a sertain way.

1.  What are three different ways to style components in React?
  You can style a component by way of CSS, LES (Preprocessor language / construct) or a styled component (Both custom (styled-component) or module based (reactstrap)). all of the accumulated techniques can be used in custom styled components to leverage the best possible mix of technology and form.