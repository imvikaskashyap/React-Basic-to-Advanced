import React, { useRef } from "react";

const UncontrolledComp = () => {
	let inputRef = useRef();
	let inputRef2 = useRef();

	const submitForm = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
		console.log(inputRef2.current.value);

		let input3 = document.getElementById("input3");
		console.log(input3.value);
	};
	return (
		<div>
			<form onSubmit={submitForm}>
				{/* we can operate value by useRef */}
				<input type="text" ref={inputRef} />
				<br />
				<br />
				<input type="text" ref={inputRef2} />

				<br />
				<br />

				{/* we can operate value by id */}
				<input type="text" id="input3" />
				<br />
				<br />
				<button>submit</button>
			</form>
		</div>
	);
};

export default UncontrolledComp;

// Note : we can't use state to change input values inside uncontrolled component.
// we can use useRef or other methods like getElementById.
