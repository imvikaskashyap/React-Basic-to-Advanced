import React from "react";
import { Component } from "react";
import "./App.css";
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
