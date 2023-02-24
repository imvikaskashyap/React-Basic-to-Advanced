import React, { useEffect, useState } from "react";
import UseEffect_2_User from "./UseEffect_2_User";

const UseEffect2 = () => {
	const [data, setData] = useState(10);
	const [count, setCount] = useState(100);

	//  ye useEffect only count state ke upar run hoga.
	useEffect(() => {
		console.log("useEffect for count", count);
	}, [count]);

	//  ye useEffect only data state ke upar run hoga.
	useEffect(() => {
		console.log("useEffect for data", data);
	}, [data]);

	// ye useEffet kisi bhi state state ke update hone par call nahi hoga.
	// useEffect(() => {
	// 	console.log("useEffect ");
	// }, []);

	return (
		<div>
			{/* <h1>
				<span>
					{count}
					::::::::
					{data}
				</span>
			</h1> */}
			<UseEffect_2_User data={data} count={count} />
			<br />
			<br />

			<button onClick={() => setCount(count + 1)}> Update COunt</button>
			<button onClick={() => setData(data + 1)}> Update data</button>
		</div>
	);
};

export default UseEffect2;
