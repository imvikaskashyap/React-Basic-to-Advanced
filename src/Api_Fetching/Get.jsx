import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const URl = "http://localhost:8000/data";

const Get = () => {
	const [data, setData] = useState([]);

	// 1st type to fetch data

	// useEffect(() => {
	// 	fetch("http://localhost:8000/data").then((data) => {
	// 		data.json().then((item) => {
	// 			// console.log(item);
	// 			setData(item);
	// 		});
	// 	});
	// }, []);

	useEffect(() => {
		fetch(URl).then((data) => {
			data.json().then((item) => {
				// console.log(item);
				setData(item);
			});
		});
	}, []);

	console.log(data);

	// 2nd type to fetch data

	// const data = async () => {
	// 	const data = await axios.get(URl);
	// 	console.log(data);
	// };

	// data();

	return (
		<div>
			<h1>Data Fetching</h1>
			<table border="1">
				<tbody>
					<tr>
						<td>ID</td>
						<td>Name</td>
						<td>Email</td>
					</tr>

					{data.map((item, i) => (
						<tr key={i}>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Get;

// yaha hum fetch method se data ko get kar rhe hain or map function se usse render kara rhe h.
// Q => can we send body inside get method.
// A -> No.
