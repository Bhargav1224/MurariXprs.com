import React, { useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import styles from "./MyOrder.module.css";
import style from "./AddCart.module.css";
import { loadData } from "../Utlis/localstorage";

export const Myorder = () => {
	const { murari } = useContext(AuthContext);
	// console.log(murari);

	let muraridata = loadData("murari");
	return (
		<div>
			<h1 className={styles.myorder}>My Orders</h1>
			{/* /image_url, id, product_name, cur_price, qty  */}

			{murari?.map(
				({
					image_url,
					id,
					product_name,
					star,
					color,
					seller,
					category,
					qty,
					cur_price
				}) => {
					return (
						<div key={id} className={styles.container}>
							<div className={styles.miniboxes}>
								<img src={image_url} alt="logo.png" />
							</div>
							<div className={styles.miniboxes}>
								<h3 className={style.price}>
									Name: <p className={style.price2}>{product_name}</p>
								</h3>
								<h3 className={style.price}>
									Color:
									<p className={style.price2}>{color}</p>
								</h3>
								<h3 className={style.price}>
									Seller:
									<p className={style.price2}>{seller}</p>
								</h3>
								<h3 className={style.price}>
									Category:
									<p className={style.price2}>{category}</p>
								</h3>
							</div>
							<div className={styles.miniboxes}>
								<h3>Qty:{qty}</h3>
								<div
									style={{
										width: "35px",
										height: "35px",
										backgroundColor: "green",
										color: "white",
									}}
								>
									<h2>{star}</h2>
									<h3>{ cur_price*qty}</h3>
								</div>
							</div>
							<div className={styles.miniboxes}>
								<h3 className={style.price}>
									OrderId:
									<p className={style.price2}>c26232623cwre</p>
								</h3>
								<h3 className={style.price}>
									Placed On:
									<p className={style.price2}>2/9/2021</p>
								</h3>
								<h3 className={style.price}>
									Delivery Expected:
									<p className={style.price2}>Fri Sep 02 2021</p>
								</h3>
								<button className={styles.buttonshop}>Track Order</button>
							</div>
						</div>
					);
				}
			)}
		</div>
	);
};
