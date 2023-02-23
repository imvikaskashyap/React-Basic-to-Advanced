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
	// componentDidUpdate state ya props ka update hone pe hi call hota hai
	componentDidUpdate(preProps, preState) {
		//  preState ka use pre(old) state ko get karne ke liye kiya jata hai
		console.log("componentDidUpdate", preState.count);

		// yadi hum pre data ko updated data se cross check karna chahte h to is condition ke through kar sakte hain
		if (preState.count === this.state.count) {
			alert("data already defined");
		}
		//  humain setState ko componentDidUpdate me bina condition ke call nahi karna chahiye warna ye infinte loop me chala jata hai
		// console.log(this.setState({ count: this.state.count + 1 }));
		// we can call api inside componentDidUpdate but call it only conditional statement
	}

	render() {
		console.log("render");
		// console.log(this.setState({ name: "Kashyap" })); very dangerous => infinite  looping
		return (
			<div>
				<h1>Hello {this.state.count}</h1>
				<button
					onClick={() => {
						// this.setState({ count: 1 });
						this.setState({ count: this.state.count + 1 });
					}}>
					Update count
				</button>
			</div>
		);
	}
}

export default App;

// can we make more of one render method inside a function or component ?
