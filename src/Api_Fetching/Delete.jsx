import React, { useEffect, useState } from "react";

const URl = "http://localhost:8000/data";

const Delete = () => {
	const [user, setUser] = useState([]);

	useEffect(() => {
		getUser();
	}, []);

	// for gettting data(ye useEffetct se bahar isliye rakha gya hai taki hum delte wale function me bhi delete hone ke baad data ko call kar sake)
	// function getUser() {
	// 	fetch("http://localhost:8000/data").then((result) => {
	// 		result.json().then((res) => {
	// 			console.log(res);
	// 			setUser(res);
	// 		});
	// 	});
	// }
	function getUser() {
		fetch(URl).then((data) => {
			data.json().then((item) => {
				setUser(item);
			});
		});
	}

	// for delteing data
	// const deleteUser = (id) => {
	// 	fetch(`http://localhost:8000/data/${id}`, {
	// 		method: "DELETE",
	// 	}).then((result) => {
	// 		result.json().then((resp) => {
	// 			// setUser(resp);
	// 			console.log(resp);
	// 			getUser();
	// 		});
	// 	});
	// };

	const deleteUser = (id) => {
		fetch(`http://localhost:8000/data/${id}`, {
			method: "DELETE",
		}).then((result) => {
			result.json().then((resp) => {
				console.log(resp);
				getUser();
			});
		});
	};

	return (
		<div>
			<h1>User Data</h1>

			<table border="1">
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
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Delete;
