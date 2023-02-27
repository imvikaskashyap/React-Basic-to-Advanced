import React, { useRef } from "react";

const UseRef = () => {
	let chageByUseRef = useRef();

	const handleInput = () => {
		// chageByUseRef.current.value = "1111";
		chageByUseRef.current.style.color = "green";
		// chageByUseRef.current.style.backgroundColor = "black";
		chageByUseRef.current.focus();
	};

	return (
		<div>
			<input type="text" ref={chageByUseRef} />
			<button onClick={handleInput}>Click</button>
		</div>
	);
};

export default UseRef;

// Note: useRef() used in only functional component.
// By useRef we can manipulate the original DOM.(But we should do that in rare case only)
