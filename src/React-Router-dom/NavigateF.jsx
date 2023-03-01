import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateF = () => {
	const navigate = useNavigate();

	// 2nd type to use navigate
	const navToPage = (url) => {
		navigate(url);
	};

	return (
		<div>
			{/* 1nd type to use navigate */}
			<button onClick={() => navigate("/about")}>Go to About</button>

			{/* 2nd */}
			<button onClick={() => navToPage("/filter")}>Go to Filter</button>
		</div>
	);
};

export default NavigateF;

// Note: useNavigate is used to jump the page by button on click.
