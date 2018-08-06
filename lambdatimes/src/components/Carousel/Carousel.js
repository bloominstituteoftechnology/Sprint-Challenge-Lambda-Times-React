import React from "react";
import PropTypes from "prop-types";

const Carousel = props => {
  return (
    <div className="carousel">
      <div className="left-button" onClick={props.leftClick}>
        {"<"}
      </div>
      <img src={props.img} alt="hello" />
      <div className="right-button" onClick={props.rightClick}>
        {">"}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  img: PropTypes.string
};

export default Carousel;
