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

// Note: Pure component prevent re rendering but with condition. condition is below
// if previous data & present data are same then it check it & prevent the rerendering
//  but if previous data & presenet data are not same then it re render.
