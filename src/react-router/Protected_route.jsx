import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected_route = (props) => {
	const { Component } = props;
	const navigate = useNavigate();
	useEffect(() => {
		const login = localStorage.getItem("login");
		if (!login) {
			navigate("/login");
		}
	});

	return (
		<div>
			<Component />
		</div>
	);
};

export default Protected_route;
