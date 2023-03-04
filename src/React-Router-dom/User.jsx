import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
	const params = useParams();
	const { name } = params;
	// console.log(params);

	const location = useLocation();
	console.log(location);

	return (
		<div>
			<h1>This is user {name}</h1>
			<h2>Age : {params.age}</h2>
		</div>
	);
};

export default User;

// Note : useParams() ka use user wale page me user ki details get karne ke liye kiya jata h;
