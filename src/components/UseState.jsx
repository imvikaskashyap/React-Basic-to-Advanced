import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
	const [data, setData] = useState("Vk");
	return (
		<div>
			<h1>{data}</h1>
			<button onClick={() => setData("kashyap")}>Update</button>
		</div>
	);
};

export default App;
