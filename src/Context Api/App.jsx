import React, { createContext } from "react";
import CompA1 from "./Use Context/CompA1";

let Firstname = createContext();
let Lastname = createContext();

const App = () => {
	return (
		<Firstname.Provider value={"Vikas"}>
			<Lastname.Provider value={"Kashyap"}>
				<CompA1 />
			</Lastname.Provider>
		</Firstname.Provider>
	);
};

export default App;

export { Firstname, Lastname };

// Note: Context Api ke through hum data ko kisi bhi child component ko pass kar sakte hain bina kisi props ki help ke. because yadi humain 1 child ke bhi 3rd child ko data send karna ho to humain data ko pehle child 1 me phir child 1 ke child 1 me phir 2 and so on..... to isi problem ko solve karne ke liye we createContext and useContext api.
// A . createContext api -
// 1. createContext()
// 2. Provider
// 3. Consumer

// B. useContext -
// 1. createContext()
// 2. Provider
// 3. useContext().
