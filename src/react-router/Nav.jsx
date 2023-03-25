import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<br />
			&nbsp;&nbsp;
			<NavLink to="/about">About</NavLink>
			<br />
			&nbsp;&nbsp;
			<NavLink to="/contact">Contact</NavLink>
			<br />
			&nbsp;&nbsp;
			<NavLink to="/login">Login</NavLink>
			&nbsp;&nbsp;
			<NavLink to="/nested">Nested Routing</NavLink>
		</nav>
	);
};

export default Nav;
