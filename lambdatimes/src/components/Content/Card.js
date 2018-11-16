import React from 'react';
import PropTypes from 'prop-types';
import styled from './../../../node_modules/styled-components';

const Section = styled.section`
	border-bottom: 1px solid lightgrey;
	display: flex;
	justify-content: space-between;
	align-items: none;
	flex-direction: column;
	background-color: #fff;
	width: 380px;
	margin-bottom: 16px;
	padding: 24px;
`;
const Heading1 = styled.h1`
	font-size: 25px;
	font-family: Didot, serif;
`;
const Div = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	margin-top: 15px;
`;
const ImageDiv = styled.div`
	padding-right: 10px;
	border-right: 1px solid lightgrey;
	height: 40px;
`;
const Image = styled.img`
	width: 40px;
`;
const Span = styled.span`
	padding-left: 10px;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
`;
const Card = (props) => {
	return (
		<Section>
			<Heading1>{props.headline}</Heading1>
			<Div>
				<ImageDiv>
					<Image src={props.img} alt="Author Thumbnail" />
				</ImageDiv>
				<Span>By {props.author}</Span>
			</Div>
		</Section>
	);
};

// Make sure to include PropTypes.
Card.propTypes = {
	headline: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};
export default Card;
