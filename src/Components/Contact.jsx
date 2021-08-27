import React, { useState } from "react";
import styles from "./Contact.module.css";
import { useHistory } from "react-router";
// eslint-disable-next-line
const contactdata = {
	email: "",
	name: "",
	message: "",
};
export const Contact = () => {
	const [contact, setContact] = useState(contactdata);
	const { name, email, message } = contact;
	const [contData, setContData] = useState([]);
	const handleContact = (e) => {
		let { name, value } = e.target;

		setContact({ ...contact, [name]: value });
	};

	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		const payload = {
			email,
			name,
			message,
		};
		setContact(" ");
		setContData([...contData, payload]);
		alert("Thank for your Review");
		history.push("/");
	};
	let data = JSON.stringify(contData);
	localStorage.setItem("contactdata", data);
	return (
		<div>
			<div className={styles.gettouch}>
				<h1>Get In Touch</h1>
				<h3>
					<i className="fas">&#xf3c5;</i> 2403/12-B Logistic st,Banglore
				</h3>
				<h3>
					<i className="fa">&#xf095;</i>+91 9951405825
				</h3>
				<h3>
					<i>&#9742;</i> +1-233-233-1834
				</h3>
				<h3>
					<i className="fa"> &#xf017;</i>
					Mon-Fri :9:00-18:00
				</h3>
				<div style={{ display: "flex" }}>
					<div>
						<i className="fa fa-facebook iconb top_img"></i>
					</div>
					<div style={{ marginLeft: "20px" }}>
						<i className="fa fa-twitter iconb top_img"></i>
					</div>
					<div style={{ marginLeft: "20px" }}>
						<i className="fa fa-pinterest iconb top_img"></i>
					</div>
					<div style={{ marginLeft: "20px" }}>
						<i className="fa fa-instagram iconb top_img"></i>
					</div>
					<div style={{ marginLeft: "20px" }}>
						<i className="fa fa-linkedin iconb top_img"></i>
					</div>
				</div>
			</div>
			<div className={styles.contact}>
				<h1>Contact Us</h1>
				<form action="contact" onSubmit={handleSubmit}>
					<input
						onChange={handleContact}
						className={styles.input}
						type="email"
						placeholder="Email*"
						name="email"
					/>
					<br />
					<br />
					<input
						onChange={handleContact}
						className={styles.input}
						type="text"
						placeholder="Name*"
						name="name"
					/>
					<br />
					<br />
					<input
						onChange={handleContact}
						className={styles.input2}
						type="text"
						placeholder="Message*"
						name="message"
					/>
					<br />
					<br />
					<input className={styles.button} type="submit" value="Send Request" />
				</form>
			</div>
		</div>
	);
};
