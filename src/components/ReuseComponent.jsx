import React from "react";

const ReuseComponent = (props) => {
	// let mob = props.item.mob;
	// console.log(props.alertFun());
	return (
		<div>
			<h1>Count : {props.count}</h1>
			<span> {props.item.name}</span>
			<span> {props.item.age}</span>
			<span> {props.item.email}</span>
			<button onClick={() => props.alertFun()}>alert </button>
		</div>
	);
};

export default ReuseComponent;

// Note => this is not a good way to make a event function in child component . We shoud make this event functions in parent component.
//  Child component me event functions banane se time consume hota h or webApp slow hota hai.
