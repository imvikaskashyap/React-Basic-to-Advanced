import React, { useState } from "react";

const StateObject = () => {
	const [data, setData] = useState({ name: "Vikas", age: 23 });

	return (
		<div>
			<h1>Sate Object with Hooks</h1>
			<input
				type="text"
				value={data.name}
				placeholder="name"
				onChange={(e) => {
					// this is not working fine
					// setData({ name: e.target.value });
					// 1st type to handle this error
					// setData({ age: data.age, name: e.target.value });c
					// 2nd type
					setData({ ...data, name: e.target.value });
				}}
			/>
			<br />
			<input
				type="text"
				value={data.age}
				placeholder="age"
				onChange={(e) => {
					setData({ ...data, age: e.target.value });
				}}
			/>
			<h3>{data.name}</h3>
			<h3> {data.age}</h3>
		</div>
	);
};

export default StateObject;

// Note : Jab hum state ko as a object use karte hain or uske kisi bhi value me change karte hain to dusri key ki value automatic remove ho jati h.
