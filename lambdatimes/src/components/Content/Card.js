import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline/* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={"props.img"/* image source goes here */} />
        </div>
        <span>By {props.author/* author goes here */}</span>
      </div>
    </div>
  )
}

// Make sure to include PropTypes.

export default Card;

// const Todo = props => {
//   return (
//     <div
//       style={props.todo.completed ? { textDecoration: 'line-through' } : null}
//       onClick={() => props.handleToggleComplete(props.todo.id)}
//     >
//       {props.todo.task}
//     </div>
//   );
// };

// export default Todo;