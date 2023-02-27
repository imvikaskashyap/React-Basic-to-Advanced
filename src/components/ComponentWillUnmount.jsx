import React from "react";
import { Component } from "react";

import Student from "./WillUnmount";

class App extends Component {
	constructor() {
		super();

		this.state = {
			show: true,
		};
		console.log("constructor");
	}

	render() {
		console.log("render");
		return (
			<div>
				{this.state.show ? (
					<Student />
				) : (
					<h1>Student component willUnmount called</h1>
				)}
				<button
					onClick={() => {
						this.setState({ show: !this.state.show });
					}}>
					Update
				</button>
			</div>
		);
	}
}

export default App;

// Note : yaha pe jab hum student component ko toggle kar rahe h tab ye delete ho ja raha h or jab again toggle karte h tab ye new banta hai, old wala delete ho jata hai permanately.
