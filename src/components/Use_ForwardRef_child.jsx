import React, { forwardRef } from "react";

const Use_ForwardRef_child = (props, ref) => {
	return (
		<div>
			{/* we can also change it by props */}
			{/* <input type="text" ref={props.changeChildInput} /> */}
			<input type="text" ref={ref} />
		</div>
	);
};

// export default Use_ForwardRef_child;
export default forwardRef(Use_ForwardRef_child);

// we can use frowardRef for updating the values from parents.
// but without forwardRef also we can update the values .
// forwardRef use as a wrapper of child component.
