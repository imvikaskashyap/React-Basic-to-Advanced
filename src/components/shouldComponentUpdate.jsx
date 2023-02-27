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

	//we call shouldComponentUpdate when we want that humain state update karani hai ya nhi. iska default behaviour false rehta h, iska matlab shouldComponentUpdate call karne pe state to update hogi but woh render nhi hogi(shouldComponentUpdate block the render function). yadi humain render karna h tab shouldComponentUpdate ke andar return true karna hoga.
	//  shouldComponentUpdate ka use conditional updation ke liye hota h

	shouldComponentUpdate() {
		// yaha hum dekh sakte h ki state to update ho rhi h kintu render nhi ho rahi hai.
		console.log("shouldComponentUpdate", this.state.count);
		// render karne ke liye return ture karna hoga.

		// return true;

		// yaha hum conditon ke through update kara sakte h
		if (this.state.count <= 10) {
			return true;
		}
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

// Note : shouldComponentUpdate & didComponentUpdate me se shouldComponentUpdate pehle call hoga .
