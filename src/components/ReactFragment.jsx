import React from "react";
import ReactFragmentChild from "./ReactFragmentChild";

const ReactFragment = () => {
	return (
		<div>
			<h1>React Fragment</h1>
			<table>
				<tbody>
					<tr>
						{/* when we use this type from child component then it will show error in console. to resolve this error use fragment in child component */}
						<ReactFragmentChild />
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ReactFragment;

// we can use React Fragment 3 types :
// 1. <React.Fragment> </React.Fragment>
// 2. <Fragment> </Fragment>
// 3. <> </>

// it is mostly used in child component
// we can,t use className in fragment
