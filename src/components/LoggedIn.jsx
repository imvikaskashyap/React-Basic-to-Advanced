import React, { useState } from "react";

const LoggedIn = () => {
	const [loggedIn, setLoggedIn] = useState(3);
	return (
		<div>
			{loggedIn === 1 ? (
				<h1>Welcome User 1 </h1>
			) : loggedIn === 2 ? (
				<h1>Welcome User 2</h1>
			) : (
				<h1>Welcome User 3</h1>
			)}
		</div>
	);
};

export default LoggedIn;

// we can use ternary operator in many if else conditions
