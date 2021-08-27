import React from "react";
import { Route, Switch } from "react-router";
import { About } from "./About";
import { AddCart } from "./AddCart";
import { Cart } from "./Cart";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { IphoneStore } from "./IphoneStore";
import { Login } from "./Login";
import { Mens } from "./Mens";
import { Music } from "./Music";
import { Myorder } from "./Myorder";
import { Navbar } from "./Navbar";
// import { SideBar } from "./SideBar";
import { Signup } from "./Signup";
// import { WishList } from "./WishList";
import { Womens } from "./Womens";

export const Routes = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/mens" exact>
					<Mens />
				</Route>
				<Route path="/womens" exact>
					<Womens />
				</Route>
				<Route path="/music" exact>
					<Music />
				</Route>
				<Route path="/iphone" exact>
					<IphoneStore />
				</Route>
				<Route path="/mens/:id">
					<AddCart />
				</Route>
				<Route path="/womens/:id">
					<AddCart />
				</Route>
				<Route path="/music/:id">
					<AddCart />
				</Route>
				<Route path="/iphone/:id">
					<AddCart />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/myorders">
					<Myorder />
				</Route>
				{/* <Route path="/mywish">
					<WishList />
				</Route> */}
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route>
					<h3>Page Not Found</h3>
				</Route>
			</Switch>
		</div>
	);
};
