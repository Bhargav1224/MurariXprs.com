import React from "react";
import { Slide } from "./Slide";
import styles from "./Home.module.css";
import { useHistory } from "react-router";
import { FooterPage } from "./FooterPage";
export const Home = () => {
	const history = useHistory();
	const handlemenShop = () => {
		history.push("/mens");
	};
	const handleWomenShop = () => {
		history.push("/womens");
	};
	const handleiphoneShop = () => {
		history.push("/iphone");
	};
	const handlemusicShop = () => {
		history.push("/music");
	};
	return (
		<div>
			<Slide />
			<div className={styles.container}>
				<h1>AMAZING PRODUCTS,HUURY...uP*****!</h1>
				<div className={styles.about}>
					<h3>
						Established 2021,Muraripark Design 7 Manufacturing creates clothes
						for men,women and Imported iPhone-store for better customer
						services, for everyday life. The exterior fabric of all Muraripark
						land products is made from 100% cutton extracted from silkworm.We
						are getting the cutton from formers and we give to our customers
						with 100% pure.Our mission is to inspire others to make sustainable
						choice by offering products that combine comfort and purpose, style
						and quantity at an accessible price.
					</h3>
				</div>
			</div>
			<div className={styles.container2}>
				<img
					className={styles.image}
					src="https://images.squarespace-cdn.com/content/v1/5ac42cd6620b8504d05354f5/1522886533223-1ILSTHF5GLLXRMUMIXJ6/ke17ZwdGBToddI8pDm48kDnkMKv1OpmY-HLCis9uKt5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpytetHIR7wH7S6bXU0j92WuvXIfN5EK4LVuJNImSIxOPXCxL03WqXgrvSiGx6BtZCw/casual.png"
					alt="logo.png"
				/>
			</div>
			<div className={styles.container}>
				<h1>AMAZING iPhon Store!</h1>
				<img
					className={styles.image}
					src="https://9to5mac.com/wp-content/uploads/sites/6/2020/10/Official-photos-as-iPhone-12-arrives-in-stores.jpg?quality=82&strip=all"
					alt="iphone.logo"
				/>
			</div>
			<div className={styles.container3}>
				<h1>Music Store</h1>
				<img
					className={styles.image}
					src="https://www.guitar-muse.com/wp-content/uploads/2013/05/Guitars.jpg"
					alt="logo.png"
				/>
			</div>

			<div className={styles.heading}>
				<h1>Popular prints</h1>
			</div>
			<div className={styles.prints}>
				<div className={styles.popular}>
					<img
						className={styles.image2}
						src="https://www.680news.com/wp-content/blogs.dir/sites/2/2020/05/rack-clothing-shopping-unsplash.jpg"
						alt="shirts.jpg"
					/>
					<div className={styles.shopnow}>
						<h1>Popualr prints</h1>
						<h3>
							Adults love them,mens love them ,we love them.Get our hands on our
							Rainbow print.Huury--they won't last long
						</h3>
						<button className={styles.buttonshop} onClick={handlemenShop}>
							Shop Now
						</button>
					</div>
				</div>
				<div className={styles.popular}>
					<img
						className={styles.image2}
						src="https://bloximages.chicago2.vip.townnews.com/theindependent.com/content/tncms/assets/v3/editorial/5/ed/5ed7c23e-2135-11e9-8bcc-773007519c4d/5c4c013360eb6.image.jpg?resize=1200%2C664"
						alt="women-store.jpg"
					/>
					<div className={styles.shopnow}>
						<h1>Meet Our best seller</h1>
						<h3>
							Have you meet the Rainbow ? A modern take on the traditional books
							clothes is the nearest update the line
						</h3>
						<button className={styles.buttonshop} onClick={handleWomenShop}>
							Shop Now
						</button>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className={styles.prints}>
				<div className={styles.popular}>
					<img
						className={styles.image2}
						src="https://i.ytimg.com/vi/6xwTjAXaPP8/maxresdefault.jpg"
						alt="shirts.jpg"
					/>
					<div className={styles.shopnow}>
						<h1>IPhone prints</h1>
						<h3>
							Adults love them,mens love them,womens ,we love them.Get our hands
							on our Rainbow print.Huury--they won't last long
						</h3>
						<button className={styles.buttonshop} onClick={handleiphoneShop}>
							Shop Now
						</button>
					</div>
				</div>
				<div className={styles.popular}>
					<img
						className={styles.image2}
						src="https://st2.depositphotos.com/3662505/6737/i/600/depositphotos_67377187-stock-photo-music-store.jpg"
						alt="women-store.jpg"
					/>
					<div className={styles.shopnow}>
						<h1>Meet Our best seller</h1>
						<h3>
							Have you meet the Rainbow ? A modern take on the traditional books
							clothes is the nearest update the line
						</h3>
						<button className={styles.buttonshop} onClick={handlemusicShop}>
							Shop Now
						</button>
					</div>
				</div>
			</div>
			<div className={styles.container}>
				<h1>OUR PRODUCTS INSPIRE CONFIDENCE</h1>
				<div className={styles.about}>
					<h3>
						We aim to creare products that inspire confidence for the life on
						the move.Whether you're using the NOMANTIC Planners to acheive your
						goals or the Clothes,Accesrories to wear and usage,Our objective is
						to give you the tools you need to make it happen--in the best way
						possible.
					</h3>
					<button className={styles.buttonshop} onClick={handlemenShop}>
						Shop Now
					</button>
				</div>
			</div>
			<div className={styles.container2}>
				<img
					className={styles.image}
					src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
					alt="logo.png"
				/>
			</div>
			<FooterPage/>
		</div>
	);
};
