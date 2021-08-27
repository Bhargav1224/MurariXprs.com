import React from "react";
import styles from "./SideBar.module.css";
export const SideBar = ({array}) => {

	return (
		<div>
			<div className={styles.conatiner}>
				<h1>Filters</h1>
				
                <div className={styles.miniboxes}>
                    <h3>Discounts</h3>
					<input className={styles.check} type="checkbox" name="" />
					<label>70% or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>60% or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>50% or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>40% or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>30% or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>20% or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>10% or More</label>
				</div>

                <div className={styles.miniboxes}>
                <h3>Filter By Rating</h3>
					<input className={styles.check} type="checkbox" name="" />
					<label>4 or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>3 or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>2 or More</label>
					<br />
					<br />
					<input className={styles.check} type="checkbox" name="" />
					<label>1 or More</label>
					
                </div>
			</div>
		</div>
	);
};
