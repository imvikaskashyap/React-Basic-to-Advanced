import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import User from "./User";
import UserAllLinks from "./UserAllLinks";
import Navbar1 from "./Navbar";
import React_router_about from "./React_router_about";
import SearchParams from "./SearchParams";
import Home from "./Home";
import NavigateF from "./NavigateF";
import Contact from "./Contact";
import Company from "./Company";
import OurEmployees from "./OurEmployees";
import Others from "./Others";
import Protected_route from "./Protected_route";
import Login from "./Login";
import Page404 from "./Page404";

const Params = () => {
	return (
		<div>
			<BrowserRouter>
				{/* <Link to="/user">User</Link> */}
				<Navbar1 />
				{/* <Link to="/userAllLinks">Users</Link> */}
				<Routes>
					<Route path="/" element={<Protected_route Component={Home} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/*" element={<Page404 />} />
					<Route path="/userAllLinks" element={<UserAllLinks />} />
					<Route
						path="/about"
						element={<Protected_route Component={React_router_about} />}
					/>

					<Route path="/user/:name/:age" element={<User />} />
					<Route path="/filter" element={<SearchParams />} />
					<Route path="/navigate" element={<NavigateF />} />
					<Route path="/contact" element={<Contact />}>
						<Route path="company" element={<Company />} />
						<Route path="ourEmployees" element={<OurEmployees />} />
						<Route path="others" element={<Others />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Params;

// params ko react-router-dom me dynamicaly data show karane ke liye use kiya jata hai.
// Ex - yadi humare paas bahut se user hai or unka data humain website me show karana h to unke liye utne hi components banane pad sakte hain but hum 1 page pe hi un sab ka data params ke through dynamically show kara sakta h. useke liye hum useParams hook ka use karte hain.

// dynamic details get karne ke liye /user/:name is tarah se likha jata hai.
