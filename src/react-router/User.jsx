import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
	const params = useParams();
	const name = params.name;
	const age = params.age;

	return (
		<div>
			<h1>Welcome to user Profile Page</h1>
			<h2>Name: {name}</h2>
			<h2>Age: {age}</h2>
		</div>
	);
};

export default User;
