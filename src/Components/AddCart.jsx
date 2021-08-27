import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import axios from "axios";
import styles from "./AddCart.module.css";
import { LoaderSpinner } from "./Loader";
import { loadData, saveData } from "../Utlis/localstorage";

export const AddCart = (children) => {
	const { id } = useParams();
	const {
		isLoading,
		setLoading,
		isError,
		murari,
		indData,
		setIsError,
		setIndData,
		setMurari,
	} = useContext(AuthContext);

	useEffect(() => {
		Indiviualdata();
	}, []);
	const Indiviualdata = () => {
		setLoading(true);
		return axios
			.get(`https://bhargavreddy1224.herokuapp.com/MurariProducts/${id}`)
			.then((res) => {
				// console.log(res.data);
				setIndData(res.data);
				setLoading(true);
			})
			.catch((er) => {
				setLoading(false);
				setIsError(true);
				alert(er);
			})

			.finally(() => {
				setLoading(false);
			});
	};

	const handleAddCart = () => {
		setMurari([...murari, { ...indData, qty: 1 }]);
		saveData("murari", murari);

	};

	const {
		image_url,
		product_name,
		star,
		cur_price,
		color,
		rating,
		reviews,
		category,
		description,
	} = indData;

	return isLoading ? (
		<LoaderSpinner/>
	) : isError ? (
		<h1 style={{ color: "red", textAlign: "center" }}>
			404 Something went wroung
		</h1>
	) :(
		<div>
			<h1 style={{ fontSize: "40px", textAlign: "center" }}>Product Details</h1>
			<div className={styles.procontainer}>
				<div className={styles.detials}>
					<img src={image_url} alt="product.png" />
				</div>
				<div className={styles.detials1}>
					<h1 className={styles.productname}>{product_name}</h1>
					<div className={styles.rating}>
						<h3 className={styles.starrating1}>{star}&#9734;</h3>
					</div>
					<div className={styles.review}>
						<h3 className={styles.starrating}>{`${rating}&${reviews}`}</h3>
					</div>
					<div className={styles.description}>
						<h3>{description}</h3>
					</div>
					<h3 className={styles.price}>
						Price: <p className={styles.price2}> &#8377;{cur_price}</p>
					</h3>
					<h3 className={styles.price}>
						Color: <p className={styles.price2}> {color}</p>
					</h3>
					<h3 className={styles.price}>
						Category:<p className={styles.price2}> {category}</p>
					</h3>

					<button onClick={handleAddCart} className={styles.cartbutton}>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};
