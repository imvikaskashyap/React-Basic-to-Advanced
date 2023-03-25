import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DynamicUser from "./DynamicUser";

const DynamicRouting2 = () => {
	const users = [
		{ id: 1, name: "vikas kashyap", email: "vk@gmail.com" },
		{ id: 2, name: "vishnu kashyap", email: "vk@gmail.com" },
		{ id: 3, name: "sunil kashyap", email: "sk@gmail.com" },
		{ id: 4, name: "ankit kashyap", email: "ak@gmail.com" },
		{ id: 5, name: "shivam kashyap", email: "sk@gmail.com" },
	];

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<h1>Welcome to user page</h1>
					{users.map((item) => (
						<div>
							<Link to={`/user/${item.id}`}>
								<h3>{item.name}</h3>
							</Link>
						</div>
					))}
					<Route path="/user/:id/:name" element={<DynamicUser />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default DynamicRouting2;
