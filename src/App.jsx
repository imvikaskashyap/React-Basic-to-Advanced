import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			count: 0,
		};
		console.log("constructor");
	}

	render() {
		console.log("render");
		return (
			<div>
				<h1>Hello {this.state.count}</h1>
				<button
					onClick={() => {
						this.setState({ count: this.state.count + 1 });
					}}>
					Update count
				</button>
			</div>
		);
	}
}

export default App;
