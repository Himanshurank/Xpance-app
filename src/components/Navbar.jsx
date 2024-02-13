import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
	return (
		<div>
			<div>
				<img src={logo} alt="logo" />
			</div>
			<ul>
				<li>Add</li>
				<li>Show</li>
			</ul>
		</div>
	);
};

export default Navbar;
