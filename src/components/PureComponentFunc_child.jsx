import React, { Component, PureComponent } from "react";

export default class PureComponentFunc_child extends PureComponent {
	render() {
		console.log(this.props.count);

		return (
			<div>
				<h1> Count: {this.props.count}</h1>
			</div>
		);
	}
}
