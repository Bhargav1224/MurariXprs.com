import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
// import { myFunction } from "./droupdown";
 import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const Navbar = () => {
	return (
		<div>
			<header>
				<div className={styles.navbar}>
					<Link
						style={{ color: "#b13c19", fontSize: "25px" }}
						className={styles.links}
						to="/"
					>
						Murari-Xprs.
					</Link>
					<Link className={styles.links} to="/about">
						About
					</Link>
					<Link className={styles.links} to="/mens">
						Mens
					</Link>
					<Link className={styles.links} to="/womens">
						Womens
					</Link>
					<Link className={styles.links} to="/music">
						Music
					</Link>
					<Link className={styles.links} to="/iphone">
						iPhone-store
					</Link>
					<Link className={styles.links} to="contact">
						Contact-Us
					</Link>
					<Link className={styles.linkscart} to="/cart">
						{/* <i style={{ fontSize: "24px" }} className="fas">
							&#xf217;
						</i> */}
						<ShoppingCartIcon/>
					</Link>

					<Link className={styles.links} to="/myorders">
						Myorders
					</Link>
					{/* <Link className={styles.links} to="/mywish">
						WishList
					</Link> */}
					<img
						height="30px"
						margintop="10px"
						src="https://findicons.com/files/icons/977/rrze/720/user_real_person.png"
						alt="person.png"
					/>
					<Link
						className="dropdown"
						style={{ marginLeft: "-3px", margintop: "-5px" }}
						// eslint-disable-next-line
						className={styles.links}
						to="/login"
					>
						Login
						{/* <i class="fa fa-caret-down"></i> */}
					</Link>
					<Link className={styles.links} to="/signup">
						Signup
					</Link>
				</div>
			</header>
		</div>
	);
};
