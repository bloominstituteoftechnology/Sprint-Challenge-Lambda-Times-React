import React from 'react';
import PropTypes from 'prop-types';




class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headline: '',
      img: '',
      author: ''
    }
  }

  componentDidMount(){
    this.setState({headline: this.props.headline, img: this.props.img, author: this.props.author});
  }

    render(){
      return (
        <div className="card">
          <div className="headline">{this.props.headline}</div>
          <div className="author">
            <div className="img-container">
              <img src={this.props.img} />
            </div>
            <span>By {this.props.author}</span>
          </div>
        </div>
      );
    }
}
  


// const Card = props => {
//   return (
//     <div className="card">
//       <div className="headline">{/* headline goes here */}</div>
//       <div className="author">
//         <div className="img-container">
//           <img src={'' /* image source goes here */} />
//         </div>
//         <span>By {/* author goes here */}</span>
//       </div>
//     </div>
//   );
// };

// Make sure to include PropTypes.


Card.propTypes = {
  card: PropTypes.objectOf(
      PropTypes.shape({
          headline: PropTypes.string,
          tab: PropTypes.string,
          img: PropTypes.string,
          author: PropTypes.string
      })
  ).isRequired
};


export default Card;
