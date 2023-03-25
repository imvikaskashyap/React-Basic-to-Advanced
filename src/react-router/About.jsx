import React from "react";
import DynamicAllLinks from "./DynamicAllLinks";

const About = () => {
	return (
		<div>
			<h1>Welcome to About Page</h1>
			<br />
			<h2>Here you can check User Details by click below</h2>
			<br />
			<DynamicAllLinks />
		</div>
	);
};

export default About;
