import React, { useEffect } from "react";

const UseEffect1 = () => {
	useEffect(() => {
		console.log("useEffect");
	});

	return (
		<div>
			<h1>this is useEffect</h1>
		</div>
	);
};

export default UseEffect1;

// Note : jab bhi component render hota hai to useEffect call hota hai. ya jab bhi koi state ya props update hota h tab bhi useEffect call hota hai but hum conditionally isko handle kar sakte h ki useEffect kab call hona hai.
// we can use more than one useEffect.
