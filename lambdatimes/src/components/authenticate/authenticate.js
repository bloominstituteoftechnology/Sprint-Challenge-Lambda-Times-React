import React from 'react';

const authenticate = (Content) => (Login) => {
	return class extends React.Component {
		constructor() {
			super();
			this.state = {
				loggedIn: false
			};
		}

		componentDidMount() {
			this.setState({
				loggedIn: localStorage.getItem('loggedIn')
			});
		}

		render() {
			return this.state.loggedIn ? (
				<Content />
			) : (
				<h1 className="authenticate">Login to Lambda Times for the latest news</h1>
			);
		}
	};
};

export default authenticate;
