import React from "react";

const LiftingStateUp_child = (props) => {
	//  we can send string,object, arrays etc.
	// const name2 = "Vkashyap";
	const name2 = {
		name: "vikas",
		age: 23,
	};

	return (
		<div>
			<h1>Name:{props.name}</h1>
			{/* we can send data to parent by passing as argument */}
			<button onClick={() => props.alert(name2)}>Click me</button>
		</div>
	);
};

export default LiftingStateUp_child;
