import React from "react";
import { Link } from "react-router-dom";

const DynamicAllLinks = () => {
	return (
		<div>
			<Link to="/user/vikas/23">Vikas Kashyap</Link>
			<br />
			<Link to="/user/sunil/24">Sunil Kashyap</Link>
		</div>
	);
};

export default DynamicAllLinks;
