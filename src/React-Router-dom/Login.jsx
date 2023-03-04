import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const login = () => {
		localStorage.setItem("login", true);
		navigate("/");
	};

	useEffect(() => {
		if (login) {
			navigate("/");
		}
	});

	return (
		<div className="login">
			<h1>Login</h1>

			<br />
			<input type="text" />
			<br />
			<input type="text" />
			<br />
			<button onClick={login}>Login</button>
		</div>
	);
};

export default Login;
