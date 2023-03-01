import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.get("city"));
	console.log(searchParams.get("age"));

	const name = searchParams.get("city");
	const age = searchParams.get("age");

	return (
		<div>
			<h1>Search Params</h1>
			<h2>City: {name}</h2>
			<h2>Age: {age}</h2>
			<input
				type="text"
				placeholder="type here"
				onChange={(e) => setSearchParams(e.target.value)}
			/>
			<br />
			<br />
			<button onClick={() => setSearchParams({ age: 55 })}>set params</button>
		</div>
	);
};

export default SearchParams;

// Note: SearchParams is used for searhing in params
// we can easily get the parmas using useSearchParams().
