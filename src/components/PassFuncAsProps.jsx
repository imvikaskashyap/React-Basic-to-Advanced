import React from "react";

const PassFuncAsProps = (props) => {
	return (
		<div>
			<h1>This is VIkas kashyap</h1>
			{/* <button onClick={props.showData}>Click me</button>  */}
			<button onClick={() => props.showData()}>Click me</button>
		</div>
	);
};

export default PassFuncAsProps;
