import React from "react";
import { Link } from "react-router-dom";
import User from "./User";

const UserAllLinks = () => {
	return (
		<div>
			<Link to="/user/vikas">Vikas Kashyap</Link>
			<br />
			<Link to="/user/sunil">Sunil Kashyap</Link>
		</div>
	);
};

export default UserAllLinks;

// yaha pe sab links get ki ja rahi hai
