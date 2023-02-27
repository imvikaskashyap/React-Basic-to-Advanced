import React, { useState } from "react";

const FormValidation = () => {
	// 	const [username, setUsername] = useState("");
	// 	const [password, setPassword] = useState("");
	// 	const [usernameErrMsg, setUsernameErrMsg] = useState(false);
	// 	const [passwordErrMsg, setPasswordErrMsg] = useState(false);

	// 	const getFormDetails = (e) => {
	// 		if (username.length < 3 || password.length < 8) {
	// 			alert("please type full length in input");
	// 		} else {
	// 			alert("welcome to home page");
	// 		}

	// 		e.preventDefault();
	// 	};

	// 	const getUserName = (e) => {
	// 		let username = e.target.value;

	// 		if (username.length < 3) {
	// 			setUsernameErrMsg(true);
	// 		} else {
	// 			setUsernameErrMsg(false);
	// 		}
	// 		setUsername(username);
	// 	};

	// 	const getPassword = (e) => {
	// 		let password = e.target.value;

	// 		if (password.length < 8) {
	// 			setPasswordErrMsg(true);
	// 		} else {
	// 			setPasswordErrMsg(false);
	// 		}

	// 		setPassword(password);
	// 	};

	// 	return (
	// 		<div>
	// 			<form onSubmit={getFormDetails}>
	// 				<input type="text" placeholder="name" onChange={getUserName} />
	// 				{usernameErrMsg ? (
	// 					<p>Username should not less than 3 character</p>
	// 				) : null}
	// 				<br />
	// 				<br />
	// 				<input type="password" placeholder="password" onChange={getPassword} />
	// 				{passwordErrMsg ? (
	// 					<p>Password should not less than 8 character</p>
	// 				) : null}
	// 				<br />
	// 				<br />
	// 				<button type="submit">Log In</button>
	// 			</form>
	// 		</div>
	// 	);

	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameErrMsg, setUsernameErrMsg] = useState(false);
	const [passwordErrMsg, setPasswordErrMsg] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userName.length < 3 || password.length < 8) {
			alert("please enter coorectly");
		}
	};

	const handleUsername = (e) => {
		const userName = e.target.value;
		console.log(e.target.value);

		if (userName.length < 3) {
			setUsernameErrMsg(true);
		} else {
			setUsernameErrMsg(false);
		}

		setUsername(userName);
	};
	const handlePassword = (e) => {
		const password = e.target.value;
		console.log(e.target.value);

		if (password.length < 8) {
			setPasswordErrMsg(true);
		} else {
			setPasswordErrMsg(false);
		}

		setPassword(password);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Enter name" onChange={handleUsername} />
				{usernameErrMsg ? <p>name should be grater than 3 char</p> : null}
				<br />
				<br />
				<input
					type="password"
					placeholder="Enter password"
					onChange={handlePassword}
				/>
				{passwordErrMsg ? <p>name should be grater than 8 char</p> : null}
				<br />
				<br />
				<button type="submit">Log In</button>
			</form>
		</div>
	);
};

export default FormValidation;
