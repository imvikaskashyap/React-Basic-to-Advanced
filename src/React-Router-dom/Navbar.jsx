import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "./../App.css";

const Navbar1 = () => {
	return (
		<div>
			<header>
				{/* css in app.css */}
				<NavLink className="link1" to="/">
					Home
				</NavLink>
				<NavLink className="link1" to="/about">
					About
				</NavLink>
				<NavLink className="link1" to="/contact">
					Contact
				</NavLink>
				<NavLink className="link1" to="/filter">
					Filter
				</NavLink>
				<NavLink className="link1" to="/login">
					Login
				</NavLink>
			</header>
		</div>
	);
};

export default Navbar1;
