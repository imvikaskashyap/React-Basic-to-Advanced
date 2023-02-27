import React, { createRef } from "react";
import { Component } from "react";

class UseRef extends Component {
	constructor() {
		super();
		this.textRef = createRef();
	}

	componentDidMount() {
		// console.log((this.textRef.current.value = "1111"));
	}

	changeByRef() {
		console.log(this.textRef.current.value);
		this.textRef.current.style.color = "blue";
		this.textRef.current.style.backgroundColor = "red";
	}

	render() {
		return (
			<div>
				<h1>Ref in React</h1>
				<input type="text" ref={this.textRef} />

				<button onClick={() => this.changeByRef()}>Click</button>
			</div>
		);
	}
}

export default UseRef;

// Mostly we don't use createRef().only use in rare case.
// Because createRef() do changes into original DOM not virual DOM.
// we can use createRef() only in class components
//  if we want to use Ref inside a functional components then we can use it with Hooks.=> useRef()

// Q - can we use more than 1 createRef() inside a class component ?
// A - Yes, you can use multiple createRef() inside a class component.

// Q2 - can we use more than 1 createRef() inside a html element ?

// Yes, you can use more than one createRef() inside a HTML element. For example:

// const myRef1 = React.createRef();
// const myRef2 = React.createRef();

// <div ref={myRef1}>
//     <div ref={myRef2}>
//         ...
//     </div>
// </div>
