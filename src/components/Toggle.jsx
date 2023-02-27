import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [data, setData] = useState(true);

	return (
		<div>
			{data ? <h1>Vikas Kashyap</h1> : null}

			{/* <button onClick={() => setData(true)}>show</button>
			<button onClick={() => setData(false)}>hide</button> */}
			<button onClick={() => setData(!data)}>toggle</button>
		</div>
	);
};

export default App;

// sort string in javascript
// we use "!" this sign to toggle
