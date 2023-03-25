import React from "react";
import { Outlet } from "react-router-dom";
// import {withRouter} from react-router-dom

const DynamicUser = (props) => {
	return (
		<div>
			<h1>This is user page</h1>
			<h3>Id:{}</h3>
			<h3>Name:{}</h3>
			<Outlet />
		</div>
	);
};

export default DynamicUser;
