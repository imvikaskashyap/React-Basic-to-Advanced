import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.get("age"));

	const age = searchParams.get("age");
	const name = searchParams.get("name");

	return (
		<div>
			<h1>Here we can easily get the input from params</h1>
			<h3>Name: {name}</h3>
			<h3>Age: {age}</h3>
			<button onClick={() => setSearchParams({ name: "vk boss" })}>
				click me
			</button>
		</div>
	);
};

export default SearchParams;
