import React, { useContext, useState } from "react";
import styles from "./Contact.module.css";
import { Redirect } from "react-router";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
const init = {
	email: "",
	password: "",
};
export const Login = () => {
	const [loginData, setloginData] = useState(init);
	const { email, password } = loginData;
	const { isAuth, setIsAuth } = useContext(AuthContext);
	const handleLogin = (e) => {
		const { name, value } = e.target;
		setloginData({ ...loginData, [name]: value });
	};
	const Email = localStorage.getItem("email");
	const Password = localStorage.getItem("password");
	const Login = () => {
		if (Email === email && Password === password) {
			localStorage.setItem("email", email);
			localStorage.setItem("password", password);

			alert("Login Successfully");
			setIsAuth(true);

			setloginData(" ");
		} else {
			alert("Please Enter correct Email and Password");
		}
	};
	// console.log(loginData);
	return !isAuth ? (
		<div>
			<div className={styles.contact}>
				<h1>Login here</h1>
				<form action="contact" onSubmit={Login}>
					<input
						required
						className={styles.input}
						name="email"
						type="email"
						placeholder="Enter email here..."
						value={email}
						onChange={handleLogin}
					/>{" "}
					<br /> <br />
					<input
						required
						className={styles.input}
						name="password"
						type="password"
						placeholder="Enter Password here..."
						value={password}
						onChange={handleLogin}
					/>
					<br /> <br />
					<input className={styles.button} type="submit" value="Login" />
				</form>
			</div>
		</div>
	) : (
		<Redirect to="/" />
	);
};
