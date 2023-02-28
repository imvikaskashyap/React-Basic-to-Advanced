import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React_router_child from "./React_router_child";
import React_router_about from "./React_router_about";
import Links from "./Links";
import Page404 from "./Page404";
import Params from "./Params";

const React_router = () => {
	return (
		<div>
			<BrowserRouter>
				<Links />
				<Routes>
					<Route path="/" element={<React_router_child />} />
					<Route path="/about" element={<React_router_about />} />
					{/* here we are using page not found (/*) */}
					{/* <Route path="/*" element={<Page404 />} /> */}

					{/* this is for redirect to home page  */}
					<Route path="/*" element={<Navigate to="/" />} />
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
// if we want to redirect to Home then we use "Navigate"
