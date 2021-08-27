import React from "react";
import styles from "./FooterPage.module.css";
export const FooterPage = () => {
	return (
		<div>
			<div className={styles.footer}>
				<div className={styles.footercontent}>
					<div style={{ display: "flex" }}>
						<img
							style={{
								width: "50px",
								height: "50px",
								borderRadius: "50%",
							}}
							src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX41574024.jpg"
							alt="murari.logo"
						/>
						<h1 style={{ fontFamily: "Charm ,cursive",cursor:"pointer", marginTop: "3px" }}>
							Murari-Xprs.
						</h1>
					</div>
					<p style={{ fontFamily: "Charm ,cursive" }}>
						1251 Town Center Banglore
					</p>
					<p style={{ fontFamily: "Charm ,cursive" }}> 9951405725 </p>
					<p style={{ fontFamily: "Charm ,cursive" }}>info@murarixprs.com</p>
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
				<div className={styles.footercontent}>
					<h1 style={{ fontFamily: "Charm ,cursive",cursor:"pointer", marginTop: "3px" }}>
						STORE MENU
					</h1>
					<h3> &#8611; Best Seller</h3>
					<h3> &#8611; Iphone Store</h3>
					<h3> &#8611; Men</h3>
					<h3> &#8611; Women</h3>
					<h3> &#8611; Accessories</h3>
				</div>
				<div className={styles.footercontent}>
					<h1 style={{ fontFamily: "Charm ,cursive",cursor:"pointer", marginTop: "3px" }}>
						INFORMATION
					</h1>
					<h3> &#8611; About us</h3>
					<h3> &#8611; Delivery Information</h3>
					<h3> &#8611; Privacy Policy</h3>
					<h3> &#8611; Terms & Conditions</h3>
					<h3> &#8611; Look Bookings</h3>
				</div>
				<div className={styles.footercontent}>
					<h1 style={{ fontFamily: "Charm ,cursive",cursor:"pointer", marginTop: "3px" }}>
						MY ACCOUNT
					</h1>
					<h3> &#8611; My Account</h3>
					<h3> &#8611; Wish List</h3>
					<h3> &#8611; Order Delivey</h3>
					<h3> &#8611; Newslatter</h3>
					<h3> &#8611; Contact us</h3>
				</div>
			</div>
		</div>
	);
};
