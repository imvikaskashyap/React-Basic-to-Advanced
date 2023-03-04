import React from "react";
import { useLocation } from "react-router-dom";

const UseLocation = () => {
	const location = useLocation();
	console.log(location);
	return (
		<div>
			<h1>This is Use Location hook </h1>
			<h2>data: state={{ name: "vikas", sirName: "kashyap" }}</h2>
		</div>
	);
};

export default UseLocation;

//what is the use of useLocation in react
// The useLocation hook in React allows developers to access the current location of the user.
// we can pass the data in search bar & send the props using "state" keyword
