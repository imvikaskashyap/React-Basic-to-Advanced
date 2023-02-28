import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React_router_child from "./React_router_child";
import React_router_about from "./React_router_about";
import Links from "./Links";

const React_router = () => {
	return (
		<div>
			<BrowserRouter>
				<Links />
				<Routes>
					<Route path="/" element={<React_router_child />} />
					<Route path="/about" element={<React_router_about />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default React_router;

// React router dom used for create pages in a web App. Ex - Navbar,Footer,Aside,About etc.
// React router dom show the web pages without refreshing website.
// it is install via - npm i react-router-dom
// it's wrap the component by - BrowserRouter & Routes and we wrap our component inside Route.
// In Route we give path and element argument.
