import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
	const params = useParams();
	const { name } = params;

	return (
		<div>
			<h1>This is user {name}</h1>
		</div>
	);
};

export default User;

// Note : useParams() ka use user wale page me user ki details get karne ke liye kiya jata h;
