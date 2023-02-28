import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
	return (
		<div>
			{/* a tags (we should not use a tags in React) */}
			<a href="/">Home(a)</a>
			<br />
			<a href="/about">About(a)</a>
			<br />

			{/* Link tags */}
			<Link to="/">Home(Link)</Link>
			<br />

			<Link to="/about">About(Link)</Link>
		</div>
	);
};

export default Links;

// Links tag just like a tag(anchor tag). it is used to going clickable page.
// In links tag we give the address of page in "to" argument.
// we don't use a tag in React for jumping to the page because it's behave just like Html rendering and refresh the page which is wrong.
