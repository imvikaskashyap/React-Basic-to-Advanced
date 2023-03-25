import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Nav from "./Nav";
import NestedRouting from "./NestedRouting";
import Page404 from "./page404";
import Profile from "./Profile";
import Protected_route from "./Protected_route";
import SearchParams from "./SearchParams";
import User from "./User";
import User_about from "./User_about";

const Main = () => {
	return (
		<div>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Protected_route Component={Home} />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/*" element={<Page404 />} />
					<Route path="/user/:name/:age" element={<User />} />
					<Route path="/search" element={<SearchParams />} />
					<Route path="/nested" element={<NestedRouting />}>
						<Route path="profile" element={<Profile />} />
						<Route path="userAbout" element={<User_about />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Main;
