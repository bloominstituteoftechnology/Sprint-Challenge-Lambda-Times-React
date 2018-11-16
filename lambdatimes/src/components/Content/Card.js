import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
    }
  }
  expand = () => {
    if(this.state.expanded === false){
      this.setState({expanded: true})
    }
    else{
      this.setState({expanded: false})
    }
  }

  render() {
    return (
      <CardWrapper onClick={this.expand} expanded={this.state.expanded ? 'true' : 'false'}>
        <div className="headline">{this.props.card.headline}</div>

        <div className="author">
          <div className="img-container">
            <img src={this.props.card.img} alt={'nothing special'} />
          </div>
          <span>By {this.props.card.author}</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper ac urna ac finibus. Aenean vel gravida tortor. Aenean eget elit sed tortor pharetra tristique at ac lacus. Proin sit amet dui fermentum, commodo eros id, lobortis diam. Donec odio orci, eleifend cursus luctus non, elementum at libero. Ut in odio aliquet, eleifend lacus a, gravida purus. Aenean tempus, elit at dignissim tristique, mi massa dictum turpis, eget venenatis urna ante vitae risus. Nulla sagittis magna orci, at gravida lectus hendrerit vel. Integer consectetur elit eget interdum blandit. Nunc sed dictum dui. Phasellus eget lobortis mi. Sed semper, leo id accumsan lacinia, velit tortor iaculis sem, vitae porta est nibh quis libero. Vivamus massa nisl, aliquam sit amet interdum dignissim, eleifend vel lacus. Mauris eget arcu fermentum felis bibendum vulputate ut sed nunc. Maecenas dictum purus sed nibh tincidunt, eu rhoncus libero pulvinar.</p>
        
        <p>Phasellus dignissim eleifend erat et placerat. Aliquam efficitur ac felis vitae iaculis. Phasellus felis mauris, blandit at quam eget, maximus consequat turpis. Nulla consectetur neque id consectetur gravida. Nam interdum enim in malesuada blandit. Aliquam consequat, leo sed laoreet aliquet, nibh massa vestibulum velit, eu aliquam tortor nisi a augue. Phasellus interdum dignissim arcu vitae dignissim.</p>

        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse volutpat laoreet semper. Fusce iaculis consectetur convallis. Nulla tristique viverra gravida. Sed ultricies at tortor vestibulum varius. Quisque tempus venenatis lectus, nec commodo tellus lacinia ut. Aenean suscipit, velit et aliquet commodo, velit nunc tempus purus, id facilisis diam est sed nibh. Quisque ac lectus at nisl ornare porta sit amet nec mi. Vestibulum lacinia mi metus, vel pharetra diam efficitur eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum commodo elementum mauris et venenatis. Sed pellentesque scelerisque nisi.</p>

        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu egestas risus. Donec nisl ante, tincidunt accumsan felis eu, vestibulum accumsan turpis. Fusce aliquam tristique augue at vestibulum. Aliquam at tortor vestibulum, sodales diam et, volutpat augue. Etiam id feugiat nibh, id semper orci. Integer ultricies lectus quam. Nulla eu est iaculis, imperdiet nulla eget, eleifend eros. Curabitur nec velit in metus facilisis egestas. Praesent vitae diam mauris.</p>

        <p>Pellentesque et ex purus. Nunc viverra ut tortor in aliquam. Mauris eu congue erat. Vivamus lacinia molestie nibh eget imperdiet. Nulla interdum tempus ante vitae auctor. Cras maximus porttitor sem, id finibus lectus ornare ut. Aenean malesuada nulla a nisl vestibulum, a sodales mauris congue. Nulla quis tortor turpis. Aliquam in ex vitae massa condimentum porta.</p>
      </CardWrapper>
    );
  }
}

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string,
    author: PropTypes.string.isRequired
  })
}

const CardWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: ${props => props.expanded === 'true' ? '95%' : '380px'};
  margin-bottom: 16px;
  padding: 24px;
  cursor: pointer;

  p {
    display: ${props => props.expanded === 'true' ? 'inline' : 'none'}
    margin: 10px;
  }

  .headline {
    font-size: 25px;
    font-family: Didot, serif;
  }

  .author {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;

    .img-container {
      padding-right: 10px;
      border-right: 1px solid lightgrey;
      height: 40px;

      img {
        width: 40px;
      }
    }

    span {
      padding-left: 10px;
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
    }
  }
`

export default Card;
