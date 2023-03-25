import React, { useContext } from "react";
import { Firstname, Lastname } from "../App";

const CompA3 = () => {
	const fname = useContext(Firstname);
	const lname = useContext(Lastname);
	return (
		<div>
			<h1>
				This is {fname} {lname}
			</h1>
		</div>
	);
};

export default CompA3;
