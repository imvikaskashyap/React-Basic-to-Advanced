import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const login = () => {
		localStorage.setItem("login", true);
		navigate("/");
	};

	// useEffect(() => {
	// 	if (login) {
	// 		navigate("/");
	// 	}
	// });

	return (
		<div>
			<h1>Welcome to Login page</h1>
			<br />
			<input type="text" placeholder="Username" />
			<br />
			<input type="text" placeholder="Password" />
			<br />
			<button onClick={login}>Login</button>
		</div>
	);
};

export default Login;
