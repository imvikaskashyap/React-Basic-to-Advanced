// yaha pe put call ke liye data pre filled ho raha hai
import React, { useEffect, useState } from "react";

const Put = () => {
	const [user, setUser] = useState([]);
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		getUser();
	}, []);

	// for gettting data(ye useEffetct se bahar isliye rakha gya hai taki hum delete wale function me bhi delete hone ke baad data ko call kar sake)
	function getUser() {
		fetch("http://localhost:8000/data").then((result) => {
			result.json().then((res) => {
				console.log(res);
				setUser(res);
				setName(res[0].name);
				setId(res[0].id);
				setEmail(res[0].email);
			});
		});
	}

	// for delteing data
	const deleteUser = (id) => {
		fetch(`http://localhost:8000/data/${id}`, {
			method: "DELETE",
		}).then((result) => {
			result.json().then((resp) => {
				// setUser(resp);
				console.log(resp);
				getUser();
			});
		});
	};

	const selectUser = (id) => {
		// console.log(user[id - 1]);
		const users = user[id - 1];
		setName(users.name);
		setId(users.id);
		setEmail(users.email);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-evenly",
				alignItems: "center",
			}}>
			<table border="1">
				<h1>User Data</h1>
				<tbody>
					<tr>
						<td>ID</td>
						<td>Name</td>
						<td>Email</td>
					</tr>

					{user.map((item, i) => (
						<tr key={i}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.email}</td>
							<td>
								<button onClick={() => deleteUser(item.id)}>delete</button>
							</td>
							<td>
								<button onClick={() => selectUser(item.id)}>Update</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<br />
			<br />

			<div>
				<input type="number" value={id} />
				<br />
				<input type="text" value={name} />
				<br />

				<input type="text" value={email} />
				<br />
				<button>Update Data</button>
			</div>
		</div>
	);
};

export default Put;
