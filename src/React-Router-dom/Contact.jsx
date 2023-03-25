import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
	return (
		<div>
			<h1>This is Contact page</h1>
			&nbsp;&nbsp;
			<Link to="company">Company</Link>
			&nbsp;&nbsp;
			<Link to="ourEmployees">Our Employees</Link>
			&nbsp;&nbsp;
			<Link to="others">Others</Link>
			<Outlet />
		</div>
	);
};

export default Contact;

// Nested routing.
// 1 hi page ke andar dusra page show karna nested routing hota hai.
// we can make many nested routing inside a page.
// we must use Outlet for nested routing.
// we dont use "/" in nested routing
