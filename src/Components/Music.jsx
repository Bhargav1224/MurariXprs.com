import React, { useContext, useEffect, useState } from "react";
// import { SideBar } from "./SideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Mens.module.css";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import { FooterPage } from "./FooterPage";
import style from "./SideBar.module.css";
import { LoaderSpinner } from "./Loader";

//https://bhargavreddy1224.herokuapp.com/MurariProducts?type=men/women/music/iphone
export const Music = () => {
	const [menData, setMenData] = useState([]);
	const { isLoading, setLoading, isError, setIsError, setIndData } =
		useContext(AuthContext);
	const [filter, setFilter] = useState([]);

	const Fetchmusicdata = () => {
		setLoading(true);
		return axios
			.get(`https://bhargavreddy1224.herokuapp.com/MurariProducts?type=music`)
			.then((res) => {
				setMenData(res.data);
				setIndData(res.data);
				setFilter(res.data);
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
	const Sortdata = (e) => {
		const { name, value } = e.target;

		return axios
			.get(
				`https://bhargavreddy1224.herokuapp.com/MurariProducts?type=music&_sort=${name}&_order=${value}`
			)
			.then((res) => {
				setMenData(res.data);
			});
	};

	const handleOffersFilter = (e, status) => {
		// console.log(status);
		// console.log(e.target.value);

		// setFilter(status, e.target.value);
		let offervalue = e.target.value;
		if (status) {
			// eslint-disable-next-line
			let filter = menData.filter((item) => {
				if (item.offers >= offervalue) {
					return item;
				}
			});

			setMenData(filter);
		} else {
			setMenData(filter);
			// console.log(menData);
		}
	};

	const handleRatingFilter = (e, status) => {
		// console.log(status);
		// console.log(e.target.value);

		// setFilter(status, e.target.value);
		let offervalue = e.target.value;
		if (status) {
			// eslint-disable-next-line
			let filter = menData.filter((item) => {
				if (item.star >= offervalue) {
					return item;
				}
			});

			setMenData(filter);
		} else {
			setMenData(filter);
			// console.log(menData);
		}
	};
	useEffect(() => {
		Fetchmusicdata();
		// eslint-disable-next-line
	}, []);

	return isLoading ? (
		<LoaderSpinner/>
	) : isError ? (
		<h1 style={{ color: "red", textAlign: "center" }}>
			404 Something went wroung
		</h1>
	) : (
		<>
			<div>
				<div className={styles.sortcontainer}>
					<div className={styles.sorting}>
						<div className={styles.matter}>
							<h1>Music is the moonlight in the gloomy night of life</h1>
							<h3>
								We aim to creare products that inspire confidence for the life
								on the move.
							</h3>
						</div>
						<h3>Sort By</h3>
						<select
							onChange={Sortdata}
							name="cur_price"
							style={{
								background: "#03b1fc",
								color: "black",
								fontSize: "20px",
							}}
						>
							<option name="Sort Price" value="asc">
								Sort Price
							</option>
							<option name="Price:Low to High" value="asc">
								Price:Low to High
							</option>
							<option name="Price:High to Low" value="DESC">
								Price:High to Low
							</option>
						</select>
					</div>
				</div>

				<div style={{ display: "flex" }}>
					<div>
						<div className={style.conatiner}>
							<h1>Filters</h1>

							<div className={style.miniboxes}>
								<h3>Discounts</h3>
								<input
									className={style.check}
									onChange={(e) => handleOffersFilter(e, e.target.checked)}
									type="checkbox"
									name="70"
									value="70"
								/>
								<label>70% or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="60"
									value="60"
									onChange={(e) => handleOffersFilter(e, e.target.checked)}
								/>
								<label>60% or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="50"
									value="50"
									onChange={(e) => handleOffersFilter(e, e.target.checked)}
								/>
								<label>50% or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="40"
									value="40"
									onChange={(e) => handleOffersFilter(e, e.target.checked)}
								/>
								<label>40% or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="30"
									value="30"
									onChange={(e) => handleOffersFilter(e, e.target.checked)}
								/>
								<label>30% or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="20"
									value="20"
									onChange={(e) => handleOffersFilter(e, e.target.checked)}
								/>
								<label>20% or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="10"
									value="10"
									onChange={(e) => handleOffersFilter(e, e.target.checked)}
								/>
								<label>10% or More</label>
							</div>
							<div className={style.miniboxes}>
								<h3>Filter By Rating</h3>
								<input
									className={style.check}
									type="checkbox"
									name="4"
									value="4"
									onChange={(e) => handleRatingFilter(e, e.target.checked)}
								/>
								<label>4 or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="3"
									value="3"
									onChange={(e) => handleRatingFilter(e, e.target.checked)}
								/>
								<label>3 or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="2"
									value="2"
									onChange={(e) => handleRatingFilter(e, e.target.checked)}
								/>
								<label>2 or More</label>
								<br />
								<br />
								<input
									className={style.check}
									type="checkbox"
									name="1"
									value="1"
									onChange={(e) => handleRatingFilter(e, e.target.checked)}
								/>
								<label>1 or More</label>
							</div>
						</div>
					</div>
					<div className={styles.menscontainer}>
						{menData.map((item) => {
							return (
								<div key={item.id}>
									<div className={styles.data}>
										<div className={styles.rating}>
											<div className={styles.rating1}>
												<p style={{ textAlign: "center", marginTop: "5px" }}>
													{item.offers}% off
												</p>
											</div>
											<div className={styles.fav}>
											&#x2764;
											</div>
										</div>
										<img src={item.image_url} alt="pics.logo" />
										<div className={styles.producont}>
											<h3>
												<Link
													style={{ textDecoration: "none", color: "black" }}
													to={`/music/${item.id}`}
												>
													{item.product_name}
												</Link>
											</h3>
											<h3>{item.color}</h3>
											<div className={styles.price}>
												<h3 style={{ color: "red" }}>Rs:{item.cur_price}</h3>
												<h3
													style={{
														color: "grey",
														float: "right",
														marginTop: "-50px",
														textDecoration: "line-through",
													}}
												>
													Rs: {item.prev_price}
												</h3>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<FooterPage />
			</div>
		</>
	);
};
