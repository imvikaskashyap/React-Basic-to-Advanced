import React from "react";
import { Table } from "react-bootstrap";

const Map = () => {
	// const person = ["vk", "sk", "dk", "jk"];

	const person = [
		{
			name: "vk",
			age: 23,
			mob: 234893895,
			email: "vk@gmail.com",
		},
		{
			name: "sk",
			age: 25,
			mob: 234893895,
			email: "sk@gmail.com",
		},
		{
			name: "dk",
			age: 22,
			mob: 234893895,
			email: "dk@gmail.com",
		},
		{
			name: "jk",
			age: 29,
			mob: 234893895,
			email: "jk@gmail.com",
		},
	];

	return (
		<div>
			<h1>Map function</h1>
			{/* {person.map((item) => (
				<h1> Name : {item}</h1>
			))} */}

			<Table border="1">
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Mob</th>
						<th>Email</th>
					</tr>
				</thead>

				{person.map((data) => (
					<tbody>
						<tr>
							<td> {data.name}</td>
							<td>{data.age}</td>
							<td> {data.mob}</td>
							<td> {data.email}</td>
						</tr>
					</tbody>
				))}
			</Table>
		</div>
	);
};

export default Map;

// Note : for iterating any item or anything else in react we use map method , dont use for loop because for loop inside return statement gives the erroe . So we use map method.
