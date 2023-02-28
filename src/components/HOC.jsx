import React, { useState } from "react";

const App1 = () => {
	return (
		<div>
			<HOCred cmp={Counter} />
			<HOCgreen cmp={Counter} />
			<HOCblue cmp={Counter} />
		</div>
	);
};

export default App1;

const HOCred = (props) => {
	return (
		<div>
			<h3 style={{ backgroundColor: "red" }}>
				<props.cmp />
			</h3>
		</div>
	);
};
const HOCgreen = (props) => {
	return (
		<div>
			<h3 style={{ backgroundColor: "green" }}>
				<props.cmp />
			</h3>
		</div>
	);
};
const HOCblue = (props) => {
	return (
		<div>
			<h3 style={{ backgroundColor: "blue" }}>
				<props.cmp />
			</h3>
		</div>
	);
};

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>update</button>
		</div>
	);
};

// Note : Higher order function woh function hota h jo kis function ko as a parameter leta hai or usme kuch bhi changes (jo hum karna chahe) karne ke bad as is it return kar deta hai
