import React, { useState } from "react";

const ControlledComp = () => {
	const [val, setVal] = useState(1000);
	return (
		<div>
			{/* we can't change this value */}
			{/* <input type="text" value={1000} /> */}

			{/* we can change value by defaultValue property */}
			{/* <input type="text" defaultValue={1000} /> */}

			{/* we can also change it by state. so this is called controlled component */}
			<input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
		</div>
	);
};

export default ControlledComp;

// what is the controlled component ?

//  ans 1 =>
// react me jab hum input fields ko state ke through controlled karte hain to use controlled component kehte hain.

//  ans 2 =>
// A controlled component is a React component that controls the values of its input elements (such as text fields, checkboxes, and dropdowns) by storing them in its own state. This allows the component to update its own state when the user interacts with it, instead of relying on an external source for data.

// Q . can we use controlled and uncontrolled function in class components.
// A . Yes, you can
