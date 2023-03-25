import React, { useState } from "react";

const PreviousState = () => {
	const [count, setCount] = useState(1);

	const updateCount = () => {
		// yaha hum previous state get kar rhe hain
		// const rand = Math.floor(Math.random() * 10);
		// setCount((pre) => {
		// 	// yaha pe previous state console me get ho rahi hai
		// 	console.log(pre);

		// 	// yaha hum condition ke through bhi previous state ko modified kar sakte hain
		// 	if (pre < 5) {
		// 		alert("it is below of 5");
		// 	}
		// 	return rand;
		// });

		// Previous state in For loop
		for (let i = 0; i < 5; i++) {
			// using only setState
			// yaha pe directly setCount karne se counter 1 by 1 hi increase hoga na ki 5 no se. if we want to increse by it 5 then use previos state
			// setCount(count + 1);

			// using previous state
			setCount((pre) => {
				// here we don't need return statement. =>>>> it's optional!
				return pre + 1;
			});
		}
	};

	return (
		<div>
			<h1> {count}</h1>
			<button onClick={updateCount}>Update</button>
		</div>
	);
};

export default PreviousState;

// Note : Previous state , data ki previous state batati hai. we can easily get the previous state by previous state method.
// is method me humain setState me callback function use karna hota h or parameter me "prev" dena hota hai.
//  Ex -
// setState((prev) => {
// console.log(prev)
// })
