import React, { useEffect } from "react";

const UseEffect_2_User = (props) => {
	useEffect(() => {
		console.log("useEffect for count" + props.count);
		console.log("useEffect for data" + props.data);
	}, [props.count, props.data]);

	return (
		<div>
			<h1>
				{props.count}
				:::::::::::::
				{props.data}
			</h1>
		</div>
	);
};

export default UseEffect_2_User;
