import React from 'react';
import styled from './../../node_modules/styled-components';

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center ${(props) => (props.main ? 'center' : 'none')};
  align-items: none;
  flex-direction: row;
  position: ${(props) => (props.main ? 'fixed' : null)};
  height: ${(props) => (props.main ? '44px' : null)};
  background-color: ${(props) => (props.main ? '#333' : null)};
  z-index: ${(props) => (props.main ? '10' : null)};
  color: ${(props) => (props.secondary ? '#fff' : null)};
  letter-spacing: ${(props) => (props.secondary ? '1px' : null)};;
  padding: ${(props) => (props.secondary ? '0 10px' : null)};
  @media (min-width: 1280px) {
    width: ${(props) => (props.secondary ? '1280px' : null)}; ;
  }
}
`;

const Div = styled.div`
	display: flex;
	justify-content: ${(props) =>
		props.left
			? 'none'
			: props.center
			? 'center'
			: props.right
			? 'flex-end'
			: null};
	align-items: center;
	flex-direction: row;
	flex: ${(props) =>
		props.left ? '1' : props.center ? '3' : props.right ? '1' : null};
	font-size: ${(props) =>
		props.left ? '11px' : props.center ? '9px' : props.right ? '11px' : null};
	font-weight: ${(props) => (props.right ? 'bold' : null)};
`;

const Span = styled.span`
	cursor: pointer;
	margin-right: ${(props) =>
		props.left ? '25%' : props.center ? '5%' : props.last ? '0' : null};
	font-weight: ${(props) => (props.left ? 'bold' : 'normal')};
	:hover {
		text-decoration: ${(props) =>
			props.center ? 'underline' : props.last ? 'underline' : 'none'};
	}
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
	return (
		<Section main>
			<Section secondary>
				<Div left>
					<Span left>TOPICS</Span>
					<Span left>SEARCH</Span>
				</Div>
				<Div center>
					<Span center>GENERAL</Span>
					<Span center>BROWNBAG</Span>
					<Span center>RANDOM</Span>
					<Span center>MUSIC</Span>
					<Span last>ANNOUNCEMENTS</Span>
				</Div>
				<Div right>
					<Span>LOG IN</Span>
				</Div>
			</Section>
		</Section>
	);
};

export default TopBar;
