import React, { Component } from "react";
import "./App.css";
import Student from "../Student";

class App extends Component {
	constructor() {
		super();
		this.state = { name: "vikas" };
	}

	render() {
		return (
			<div>
				<Student name={this.state.name} />
				<button onClick={() => this.setState({ name: "kashyap" })}>
					Update
				</button>
			</div>
		);
	}
}

export default App;

// Note : Here we are passing props in class components & getting this props inside student component.
