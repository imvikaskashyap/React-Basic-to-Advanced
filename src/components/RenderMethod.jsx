import React, { Component } from "react";

class RenderMethod extends Component {
	constructor() {
		super();
		this.state = {
			email: "vk@gmail.com",
		};
	}

	render() {
		// console.log(this.props);
		console.log(this.state);
		return (
			<div>
				<h1>Render Method </h1>
				<h1>{this.state.email}</h1>
				<h1>{this.props.name}</h1>
				<button onClick={() => this.setState({ email: "vikas@yahoo.com" })}>
					update email
				</button>
			</div>
		);
	}
}

export default RenderMethod;

// app component =>>>>>

import React, { useState } from "react";
import "./App.css";
import RenderMethod from "./components/RenderMethod";

const App = () => {
	const [name, setName] = useState("vikas ");

	return (
		<div>
			<RenderMethod name={name} />

			{/* <button onClick={() => setName("kashyap")}>update</button> */}
		</div>
	);
};

// export default App;
