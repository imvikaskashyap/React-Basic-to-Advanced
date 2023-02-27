import React, { useMemo, useState } from "react";

const UseMeomo = () => {
	const [count, setCount] = useState(0);
	const [item, setItem] = useState(10);

	const countMemo = useMemo(
		function multiCount() {
			console.log("multiCount");
			return count * 10;
		},
		[count]
	);

	return (
		<div>
			<h2>{count}</h2>
			<h2>{item}</h2>
			<h2>{countMemo}</h2>

			<button onClick={() => setCount(count + 1)}>Count</button>
			<button onClick={() => setItem(item + 10)}>Item</button>
		</div>
	);
};

export default UseMeomo;

// Note : yaha pe count state update hone par multiCount funtion render ho raha that's no issue.
//  but yaha pe item state ko update hone par bhi multiCount function render ho raha hai. that's means any other state karne par multiCount funtion render ho raha hai.
// so it will do slow react app
// but we can prevent this by use useMemo() hook.
// we can pass this entire function inside useMemo hook and assign useMemo hook to a variable, and can use that variable.
