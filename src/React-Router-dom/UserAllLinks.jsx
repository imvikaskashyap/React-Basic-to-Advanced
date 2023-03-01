import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserAllLinks = () => {
	return (
		<div>
			<h1>Here is all links</h1>
			<Link to="/user/vikas/24">Vikas Kashyap</Link>
			<br />
			<Link to="/user/sunil/25">Sunil Kashyap</Link>
		</div>
	);
};

export default UserAllLinks;

// yaha pe sab links get ki ja rahi hai
// link ko visited dikhane ke liye css file me active class ko color dena chahiye.
// Navbar me Link ko className nahi dena chahiye iski jagah NavLink use karne chahiye or isko hum class de sakte hain.
