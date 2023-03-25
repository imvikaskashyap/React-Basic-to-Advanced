import React from "react";
import { Firstname, Lastname } from "../App";

const CompA3 = () => {
	return (
		<Firstname.Consumer>
			{(fname) => {
				return (
					<Lastname.Consumer>
						{(lname) => {
							return (
								<h1>
									Hi, this is {fname} {lname}
								</h1>
							);
						}}
					</Lastname.Consumer>
				);
			}}
		</Firstname.Consumer>
	);
};

export default CompA3;
