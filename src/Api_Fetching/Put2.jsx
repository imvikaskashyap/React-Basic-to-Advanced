import React, { useEffect, useState } from "react";

const Put = () => {
	const [user, setUser] = useState([]);
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [userId, setUserId] = useState(null);

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
				setUserId(res[0].id);
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
		// const user = user[id - 1];
		setName(user[id - 1].name);
		setEmail(user[id - 1].email);
		setUserId(user[id - 1].id);
	};

	const updateData = () => {
		// console.log(id, name, email);
		let data = { name, email };

		fetch(`http://localhost:8000/data/${userId}`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((result) => {
			result.json().then((resp) => {
				console.warn(resp);
				getUser();
			});
		});
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
				{/* <input
					type="number"
					value={id}
					onChange={(e) => setId(e.target.value)}
				/> */}
				<br />
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />

				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<button onClick={updateData}>Update Data</button>
			</div>
		</div>
	);
};

export default Put;
