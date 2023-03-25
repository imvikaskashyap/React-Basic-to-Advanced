import React from "react";
import { Link, Outlet } from "react-router-dom";

const NestedRouting = () => {
	return (
		<div>
			<Link to="profile">Profile</Link>
			<br />
			<Link to="userAbout">User About</Link>
			<Outlet />
		</div>
	);
};

export default NestedRouting;
