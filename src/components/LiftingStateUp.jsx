import React from "react";
import LiftingStateUp_child from "./LiftingStateUp_child";

const LiftingStateUp = () => {
	let name = "Vikas Kashyap";

	// we can access here child data
	const alertFunc = (name2) => {
		alert(name2);
	};

	return (
		<div>
			<h1>Lifting state up</h1>
			<LiftingStateUp_child alert={alertFunc} name={name} />
		</div>
	);
};

export default LiftingStateUp;

// Note : Lifting state up means send data from parent to child .
