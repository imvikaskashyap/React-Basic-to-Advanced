import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			<h1>Page not found 404</h1>
			<Link to="/">Go to Home page</Link>
		</div>
	);
};

export default Page404;

// Note : Page 404 use => when we write any wrong url in search bar then it will redirect to page 404.
// it will used by giving "/*" in main app.
// if we want to redirect to Home then we use "Navigate"
