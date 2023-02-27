import React from "react";
import { Component } from "react";

class App extends Component {
	constructor() {
		super();

		this.state = {
			name: "VIkas",
		};
		console.log("constructor");
	}

	// componentDidMount called when 1st constructor called 2nd render called after that componentDidMount called
	// componentDidMount mostly used for fetching data
	// Only one time componentDidMount called
	// updated stated and updated props does'nt affect componentDidMount.
	componentDidMount() {
		console.log("componentDidMount");
	}

	render() {
		console.log("render");
		// console.log(this.setState({ name: "Kashyap" })); very dangerous => infinite  looping
		return (
			<div>
				<h1>Hello {this.state.name}</h1>
				<button
					onClick={() => {
						this.setState({ name: "Kashyap" });
					}}>
					Update Name
				</button>
			</div>
		);
	}
}

export default App;
