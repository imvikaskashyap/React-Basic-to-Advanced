import React, { Component } from "react";

class Student extends Component {
	//  Note : Component will unmount is calling here.
	componentWillUnmount() {
		console.log("componentWillUnmount");
	}

	render() {
		return (
			<div>
				<h1>Student Component</h1>
			</div>
		);
	}
}

export default Student;
