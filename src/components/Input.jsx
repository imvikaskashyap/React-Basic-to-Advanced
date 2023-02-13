import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [data, setData] = useState(null);
	const [send, setSend] = useState(false);

	const getData = (e) => {
		console.log(e.target.value);
		setData(e.target.value);
		setSend(false);
	};

	return (
		<div>
			{send ? <h1>{data}</h1> : null}
			<input onChange={getData} type="text" />
			<button onClick={() => setSend(true)}>send</button>
		</div>
	);
};

export default App;
