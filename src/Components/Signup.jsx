import React, { useState } from "react";
import styles from "./Contact.module.css";
import { useHistory } from "react-router";

const init = {
	name: "",

	email: "",
	password: "",
	phone: "",
	address: "",
};
export const Signup = (contactdata) => {
	const [signData, setSignData] = useState(init);
	const { name, phone, email, password, address } = signData;

	const handleSignup = (e) => {
		const { name, value } = e.target;
		setSignData({ ...signData, [name]: value });
	};
	const history = useHistory();
	const Signup = () => {
		localStorage.setItem("email", email);
		localStorage.setItem("password", password);
		localStorage.setItem("name", name);
		localStorage.setItem("phone", phone);
		localStorage.setItem("address", address);

		history.push("/login");
		alert("Signed up Successfully");

		setSignData(" ");
		// }
    };
    // console.log(signData)
	return (
		<div>
			<div className={styles.contact}>
				<h1>Register here</h1>
				<form action="contact" onSubmit={Signup}>
					<input
						required
						className={styles.input}
						name="name"
						type="text"
						placeholder="Enter Name here..."
						value={name}
						onChange={handleSignup}
					/>{" "}
					<br /> <br />
					<input
						required
						name="phone"
						className={styles.input}
						type="text"
						placeholder="Enter Phone-No here..."
						value={phone}
						onChange={handleSignup}
					/>
					<br /> <br />
					<input
						required
						className={styles.input}
						name="email"
						type="email"
						placeholder="Enter email here..."
						value={email}
						onChange={handleSignup}
					/>{" "}
					<br /> <br />
					<input
						required
						className={styles.input}
						name="password"
						type="password"
						placeholder="Enter Password here..."
						value={password}
						onChange={handleSignup}
					/>
					<br /> <br />
					<textarea
						className={styles.input2}
						name="address"
						value={address}
						onChange={handleSignup}
						placeholder="Enter Address here..."
						cols="45"
						rows="10"
					></textarea>
					<br /> <br />
					<input className={styles.button} type="submit" value="Signup" />
				</form>
			</div>
		</div>
	);
};
