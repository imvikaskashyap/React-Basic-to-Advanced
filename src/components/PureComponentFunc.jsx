import React from "react";
import { PureComponent } from "react";
import PureComponentFunc_child from "./PureComponentFunc_child";

class PureComponentFunc extends PureComponent {
	constructor() {
		super();
		this.state = {
			count: 1,
		};
	}
	render() {
		console.log("rendering");
		return (
			<div>
				<h1>Pure component</h1>
				<PureComponentFunc_child count={this.state.count} />
				<button onClick={() => this.setState({ count: 1 })}>update</button>
			</div>
		);
	}
}

export default PureComponentFunc;

// Note : Pure component woh component hota h jo previous data(state,props etc) se compare karte hai or yadi previous data or new data same hota hai to woh rerendering nahi karta hai .
// is se humare app ki speed increasing hoti h.
