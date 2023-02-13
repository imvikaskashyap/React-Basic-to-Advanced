import React, { useState } from "react";

const FormValidation = () => {
	// const [username, setUsername] = useState("");
	// const [Password, setPassword] = useState("");
	// const [errMsg, setErrMsg] = useState(false);

	// const getFormDetails = (e) => {
	// 	e.preventDefault();
	// };

	// const getUsername = (e) => {
	// 	let username = e.target.value;
	// 	if (username.length < 3) {
	// 		setErrMsg(true);
	// 		setUsername(username);
	// 	} else {
	// 		setErrMsg(false);
	// 	}
	// };

	// const getPassword = (e) => {
	// 	let password = e.target.value;
	// 	if (password.length < 8) {
	// 		setErrMsg(true);
	// 		setPassword(password);
	// 	} else {
	// 		setErrMsg(false);
	// 	}
	// };

	// return (
	// 	<div>
	// 		<form onSubmit={getFormDetails}>
	// 			<input
	// 				type="text"
	// 				placeholder="Enter your Name"
	// 				onChange={getUsername}
	// 			/>
	// 			{errMsg ? <p>Username length should not less than 3 </p> : ""}
	// 			<br />
	// 			<br />
	// 			<input
	// 				type="text"
	// 				placeholder="Enter your Password"
	// 				onChange={getPassword}
	// 			/>
	// 			{errMsg ? <p>Password length should not less than 8 </p> : ""}
	// 			<br />
	// 			<br />
	// 			<button type="submit">Submit</button>
	// 		</form>
	// 	</div>
	// );

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [usernameErrMsg, setUsernameErrMsg] = useState(false);
	const [passwordErrMsg, setPasswordErrMsg] = useState(false);

	const getFormDetails = (e) => {
		if (username.length < 3 || password.length < 8) {
			alert("please type full length in input");
		} else {
			alert("welcome to home page");
		}

		e.preventDefault();
	};

	const getUserName = (e) => {
		let username = e.target.value;

		if (username.length < 3) {
			setUsernameErrMsg(true);
		} else {
			setUsernameErrMsg(false);
		}
		setUsername(username);
	};

	const getPassword = (e) => {
		let password = e.target.value;

		if (password.length < 8) {
			setPasswordErrMsg(true);
		} else {
			setPasswordErrMsg(false);
		}

		setPassword(password);
	};

	return (
		<div>
			<form onSubmit={getFormDetails}>
				<input type="text" placeholder="name" onChange={getUserName} />
				{usernameErrMsg ? (
					<p>Username should not less than 3 character</p>
				) : null}
				<br />
				<br />
				<input type="password" placeholder="password" onChange={getPassword} />
				{passwordErrMsg ? (
					<p>Password should not less than 8 character</p>
				) : null}
				<br />
				<br />
				<button type="submit">Log In</button>
			</form>
		</div>
	);
};

export default FormValidation;
