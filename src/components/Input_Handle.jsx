import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [data, setData] = useState("");
	const [selct, setSelct] = useState("");
	const [tnc, setTnc] = useState(false);

	const getFormData = (e) => {
		console.log(data, selct, tnc);
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={getFormData}>
				<input
					type="text"
					placeholder="enter name"
					onChange={(e) => setData(e.target.value)}
				/>
				<br />
				<br />
				<select onChange={(e) => setSelct(e.target.value)}>
					<option>Select Movies</option>
					<option>Robot 2.0</option>
					<option>RRR</option>
					<option>Physics Wallah</option>
				</select>
				<br />
				<br />
				<input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
				<span>Terms & Conditions</span>
				<br />
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default App;
