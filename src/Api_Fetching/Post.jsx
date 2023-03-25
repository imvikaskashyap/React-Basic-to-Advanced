import React, { useState } from "react";

const Post = () => {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const url = "http://localhost:8000/data";

	const saveData = () => {
		console.log(id, name);
		let data = { id, name, email };

		// fetch("http://localhost:8000/data", {
		// 	method: "POST",
		// 	headers: {
		// 		Accept: "application/json",
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(data),
		// }).then((result) => {
		// 	result.json().then((res) => {
		// 		console.log("response => ", res);
		// 	});
		// });

		fetch(url, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((result) => {
			result.json().then((resp) => {
				console.log("Response => ", resp);
				setId("");
				setEmail("");
				setName("");
			});
		});
	};

	return (
		<div>
			<h1>Post method</h1>
			<input
				required
				type="number"
				placeholder="userId"
				value={id}
				onChange={(e) => setId(e.target.value)}
			/>
			<br />
			<br />
			<input
				required
				type="text"
				placeholder="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<br />
			<input
				required
				type="text"
				placeholder="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<br />
			<button onClick={saveData}>Save data</button>
		</div>
	);
};

export default Post;

// yaha hum data ko post method se create kar rahe hain .
