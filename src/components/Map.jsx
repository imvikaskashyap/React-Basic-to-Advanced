import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ReuseComponent from "./ReuseComponent";

// const Map = () => {
// 	// const person = ["vk", "sk", "dk", "jk"];
// 	const [count, setCount] = useState(0);

// 	const person = [
// 		{
// 			name: "vk",
// 			age: 23,
// 			mob: 234893895,
// 			email: "vk@gmail.com",
// 		},
// 		{
// 			name: "sk",
// 			age: 25,
// 			mob: 234893895,
// 			email: "sk@gmail.com",
// 		},
// 		{
// 			name: "dk",
// 			age: 22,
// 			mob: 234893895,
// 			email: "dk@gmail.com",
// 		},
// 		{
// 			name: "jk",
// 			age: 29,
// 			mob: 234893895,
// 			email: "jk@gmail.com",
// 		},
// 	];

// 	//  nested map
// 	// const users = [
// 	// 	{
// 	// 		name: "Anil",
// 	// 		email: "anil@test.com",
// 	// 		address: [
// 	// 			{ hm: "101", city: "Noida", country: "India" },
// 	// 			{ hm: "10", city: "Gurgaon", country: "India" },
// 	// 			{ hm: "23", city: "Noida", country: "India" },
// 	// 			{ hm: "45", city: "Delhi", country: "India" },
// 	// 		],
// 	// 	},
// 	// 	{
// 	// 		name: "Burce",
// 	// 		email: "bruce@test.com",
// 	// 		address: [
// 	// 			{ hm: "101", city: "Noida", country: "India" },
// 	// 			{ hm: "10", city: "Gurgaon", country: "India" },
// 	// 			{ hm: "23", city: "Noida", country: "India" },
// 	// 			{ hm: "45", city: "Delhi", country: "India" },
// 	// 		],
// 	// 	},
// 	// 	{
// 	// 		name: "Peter",
// 	// 		email: "peter@test.com",
// 	// 		address: [
// 	// 			{ hm: "101", city: "Noida", country: "India" },
// 	// 			{ hm: "10", city: "Gurgaon", country: "India" },
// 	// 			{ hm: "23", city: "Noida", country: "India" },
// 	// 			{ hm: "45", city: "Delhi", country: "India" },
// 	// 		],
// 	// 	},
// 	// 	{
// 	// 		name: "Sam",
// 	// 		email: "sam@test.com",
// 	// 		address: [
// 	// 			{ hm: "101", city: "Noida", country: "India" },
// 	// 			{ hm: "10", city: "Gurgaon", country: "India" },
// 	// 			{ hm: "23", city: "Noida", country: "India" },
// 	// 			{ hm: "45", city: "Delhi", country: "India" },
// 	// 		],
// 	// 	},
// 	// ];

// 	const alertFun = () => {
// 		setCount(count + 1);
// 		console.log("This is alert function from parent component");
// 	};
// 	return (
// 		// <div>
// 		// 	<h1>Map function</h1>
// 		// 	{/* {person.map((item) => (
// 		// 		<h1> Name : {item}</h1>
// 		// 	))} */}

// 		// 	<Table variant="dark" striped>
// 		// 		<tbody>
// 		// 			<tr>
// 		// 				<th>Id</th>
// 		// 				<th>Name</th>

// 		// 				<th>Email</th>
// 		// 				<th>Address</th>
// 		// 			</tr>
// 		// 		</tbody>

// 		// 		{users.map((data, i) => (
// 		// 			<tbody key={i}>
// 		// 				<tr>
// 		// 					<td> {i + 1}</td>
// 		// 					<td> {data.name}</td>

// 		// 					<td> {data.email}</td>
// 		// 					<td>
// 		// 						{data.address.map((item, i) => (
// 		// 							<Table variant="dark" striped>
// 		// 								<tbody>
// 		// 									<tr>
// 		// 										<td>{item.city}</td>
// 		// 										<td>{item.country}</td>
// 		// 										<td>{item.hm}</td>
// 		// 									</tr>
// 		// 								</tbody>
// 		// 							</Table>
// 		// 						))}
// 		// 					</td>
// 		// 				</tr>
// 		// 			</tbody>
// 		// 		))}
// 		// 	</Table>
// 		// </div>

// 		//  Reuse component by Map

// 		<div>
// 			{person.map((item, i) => (
// 				<ReuseComponent count={count} item={item} alertFun={alertFun} />
// 			))}
// 		</div>
// 	);
// };

// export default Map;

// Note : for iterating any item or anything else in react we use map method , dont use for loop because for loop inside return statement gives the erroe . So we use map method.

const Map = () => {
	const person = [
		{ name: "vikas", age: 23, email: "vk@gmail.com" },
		{ name: "sunil", age: 24, email: "sk@gmail.com" },
		{ name: "shivam", age: 20, email: "sk@gmail.com" },
		{ name: "ankit", age: 22, email: "ak@gmail.com" },
	];

	const [count, setCount] = useState(100);

	const update = () => {
		setCount(count + 1);
	};

	const alertFun = (name) => {
		console.log(name);
		alert("this is parent from func");
	};

	return (
		<div>
			{person.map((item, i) => (
				<ReuseComponent item={item} count={count} alertFun={alertFun} />
			))}
			<button onClick={update}>update</button>
		</div>
	);
};

export default Map;
