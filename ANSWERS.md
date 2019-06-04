Prop types check the data, to make sure
that each object will have a string, num or what ever data types belong in the object, that way each one will be passed in a more organized way, and avoid potential errors.


2. A lifecycle event is like the birth, and events, and death if the component was a person. ComponentDidMount is what first renders the data to the screen. ComponentDidMount will set the state of the app too.
shouldComponentUpdate will render the data, only if neccessary.

componentWillUnmount will remove the component from the screen.

3. A higher level Component is basically like a callback, but instead of a Function which takes in another function it's a Component which takes in another Component.



4.BootStrap - 
a Large Library of styles that makes CSS much easier.

 React Strap - you can have many prestyled components from a big Library, especially designed for React.


 Styled Component - Styled Components are great for reusabitlity. I can make a HTML tag specifically styled, and could also pass props to make many different versions of each and re use them for many applications, like this

const Button = styled.button`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    ${props => (props.type === 'primary' ? `background: #2196f3;` : null)}
    ${props => (props.type === 'success' ? `background: #4caf50;` : null)}
    ${props => (props.type === 'danger' ? `background: #f44336;` : null)}
    ${props => (props.type === 'warning' ? `background: #fdd835;` : null)}
`;