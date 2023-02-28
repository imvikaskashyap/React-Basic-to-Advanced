import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import User from "./User";
import UserAllLinks from "./UserAllLinks";

const Params = () => {
	return (
		<div>
			<BrowserRouter>
				<Link to="/UserAllLinks">User</Link>
				<Routes>
					<Route path="/UserAllLinks" element={<UserAllLinks />} />

					<Route path="/user/:name" element={<User />} />

					<Route path="/user/:name" element={<User />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Params;

// params ko react-router-dom me dynamicaly data show karane ke liye use kiya jata hai.
// Ex - yadi humare paas bahut se user hai or unka data humain website me show karana h to unke liye utne hi components banane pad sakte hain but hum 1 page pe hi un sab ka data params ke through dynamically show kara sakta h. useke liye hum useParams hook ka use karte hain.

// dynamic details get karne ke liye /user/:name is tarah se likha jata hai.