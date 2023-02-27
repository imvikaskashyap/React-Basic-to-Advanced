import React, { useRef } from "react";
import Use_ForwardRef_child from "./Use_ForwardRef_child";

const Use_ForwardRef = () => {
	const changeChildInput = useRef();

	const inputHandler = () => {
		// changeChildInput.current.value = "234234324";
		changeChildInput.current.style.color = "red";
	};

	return (
		<div>
			<h1>Use Forward Ref</h1>
			{/* <Use_ForwardRef_child changeChildInput={changeChildInput} /> */}
			<Use_ForwardRef_child ref={changeChildInput} />
			<button onClick={inputHandler}>Click</button>
		</div>
	);
};

export default Use_ForwardRef;

// we use Forward ref to change ref property in child component.
// we pass ref into child component just like props.
