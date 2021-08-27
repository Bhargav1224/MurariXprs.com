import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./Slide.module.css";
const imgData = [
	"https://wallpaperaccess.com/full/1225340.jpg",
	"https://content3.jdmagicbox.com/comp/alappuzha/v7/0477px477.x477.190803183550.m3v7/catalogue/peeka-men-alappuzha-0pfdpwl1wa.jpg?clr=523314",
	"https://c0.wallpaperflare.com/preview/74/650/321/woman-carrying-a-baby-standing-in-front-of-store.jpg",
	"https://wallpapercave.com/wp/wp2673288.jpg",
	"https://c1.wallpaperflare.com/preview/784/1019/593/guitar-store-rock.jpg",
];
const title = [
	"Enjoy-Apple",
	"Mens-store",
	"Women-Store",
	"CapLinks",
	"Music-store",
];
const subtitle = [
	"Connect LIVE with the folks behind your favorite campaigns",
	"QuietOn 3 - The smallest ANC earbuds for sleeping",
	"Trigger Point Rocker: Feel Good & Build Muscle",
	"GigaDrive: World’s Fastest External SSD",
	"Prepd Chef Skillet - The Ultimate Everyday Pan",
];
const description = [
	"For the week of #EarthDay, join us for a series of live roundtable panels with crowdfunding changemakers",
	"Sleep in silence with revolutionary Noise Cancelling technology. No noise masking or extra sounds",
	"Developed by Dr. Aaron Fu based on 1000s of screaming backs, necks & shoulders. Happiness Guarantee✅",
	"with 2,800MB/s transfer speeds ⚡ and heat control technology.",
	"Lighter, Smoother, Naturally Non-Stick Cast Iron Skillet",
];
export const Slide = () => {
	const [img, setImg] = useState(0);
	useEffect(() => {
		const x = setInterval(() => {
			setImg(img === imgData.length - 1 ? 0 : img + 1);
		}, 3000);
		return () => clearInterval(x);
	}, [img]);

	const history = useHistory();

	const GotoSignup = () => {
		history.push("/signup");
    };
    const GotoAbout = () => {
		history.push("/about");
	};

	return (
		<div className={styles.maincomp}>
			<img src={imgData[img]} alt="blank" className={styles.slide} />
			<p className={styles.title}> {title[img]}</p>
			<p className={styles.subtitle}>{subtitle[img]}</p>
			<p className={styles.description}>{description[img]}</p>
			<h1 className={styles.count}>{img}/5</h1>
			<div className={styles.sidecard}>
				<p className={styles.p11}>Find it first on Murari-Xprs</p>
				<p className={styles.p12}>
					Murari-xPrs is where early adopters and innovation seekers find
					lively, imaginative tech before it hits the mainstream.
				</p>
				<button onClick={GotoSignup}className={styles.buttonshop}>
					Sign Up Now
				</button>
				<button onClick={GotoAbout} className={styles.btn1}>Learn More</button>
			</div>
		</div>
	);
};
