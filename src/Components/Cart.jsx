import React, { useContext, useEffect } from "react";
// import { useHistory } from "react-router";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import styles from "./AddCart.module.css";
import StripeCheckout from "react-stripe-checkout";
// import { loadData } from "../Utlis/localstorage";

export const Cart = () => {
	const { murari, setMurari } = useContext(AuthContext);
	const handleDelete = (id) => {
		const updatedItems = murari.filter((item) => item.id !== id);
		setMurari(updatedItems);
	};

	let sum = 0;

	const handleQuantity = (val, id) => {
		const qnatity = murari.map((item) => {
			if (item.id === id) {
				item.qty += val;
			}

			return item;
		});
		setMurari(qnatity);
		// console.log(id);
	};

	// const history = useHistory();

	// const Checkout = () => {
	// 	history.push("/myorders");
	// };

	

	// var muraridata = loadData("murari");
	// // console.log(muraridata);

	useEffect(() => {
		handleQuantity();
		// eslint-disable-next-line
	}, []);

	return (
		<div style={{ display: "block" }}>
			<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{murari?.map(
						({ image_url, id, product_name, cur_price, qty }) => {
							console.log(cur_price, qty, product_name);

							const totalprice = Number(cur_price * qty);
							// console.log(totalprice);

							sum = sum + totalprice;
							return (
								<tr key={id}>
									<td>
										<div className={styles.imagebox}>
											<img
												className={styles.images}
												src={image_url}
												alt="logo.png"
											/>
										</div>
									</td>
									<td>
										<h3 className={styles.tabledata}>{product_name}</h3>
									</td>
									<td>
										<h3 className={styles.tabledata}>{cur_price}</h3>
									</td>
									<td>
										<div className={styles.buttons}>
											<button
												disabled={qty === 1}
												onClick={() => handleQuantity(-1, id)}
											>
												-
											</button>
											<button>{qty}</button>
											<button onClick={() => handleQuantity(1, id)}>+</button>
										</div>
									</td>
									<td>
										<h3 className={styles.tabledata}>&#8377;{totalprice}</h3>
									</td>
									<td>
										<div className={styles.btnbox}>
											<button
												className={styles.delicon}
												onClick={() => handleDelete(id)}
											>
												<i className="fa fa-trash"></i>
											</button>
										</div>
									</td>
								</tr>
							);
						}
					)}
					<tr>
						<th colspan="4">Total Price</th>
						<td>
							<h3 className={styles.tabledata}>{sum}</h3>
						</td>
					</tr>
				</tbody>
			</table>
			<div  className={styles.paybtn}>
				{/* <button onClick={Checkout}>Proceed to Checkout</button> */}
				<StripeCheckout
					stripeKey="pk_test_51J2c5MSJXP7UJEsaX09X6zs7lMCN3XUj3PYnH67gO15T98UKO3njq0h54A4GMrp28KRX9J0nGgs5nKB0ddJVownD00w9wRgoZa"
					price={sum}
					label="Proceed to Checkout"
					className="redButton"
				/>
			</div>
		</div>
	);
};
