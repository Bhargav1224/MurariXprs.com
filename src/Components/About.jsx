import React from "react";
import styles from "./Home.module.css";
import style from "./About.module.css";
import { FooterPage } from "./FooterPage";
export const About = () => {
	return (
		<div>
			<div className={styles.container}>
				<h1>About Our Murari-Xprs</h1>
				<div className={styles.about}>
					<h1>
						We believe that every project exsiting in digital world is a result
						of an idea and every idea has a cause.
					</h1>
					<h3>
						For this reason,our each and every design serves an idea.Our
						strength in design is reflected by our name,our care for details.Our
						specialist won't be afraid to go extra miles just to approachh near
						perfection .We don't require everything to be perfect,but we need
						them to be perfectly cared for.That's reason why we are willing to
						give contributions at best.Not a single details is missed out under
						Billey's professional eyes.The amount of detection and effort equal
						to the level of passion and by.
					</h3>
				</div>
			</div>
			<div className={styles.container2}>
				<img
					className={styles.image}
					src="https://bloximages.chicago2.vip.townnews.com/theindependent.com/content/tncms/assets/v3/editorial/5/ed/5ed7c23e-2135-11e9-8bcc-773007519c4d/5c4c013360eb6.image.jpg?resize=1200%2C664"
					alt="logo.png"
				/>
			</div>
			<div className={style.container}>
				<div className={style.aboutcontent}>
					<img
						className={style.image}
						src="https://st2.depositphotos.com/3837271/9108/i/600/depositphotos_91089160-stock-photo-what-can-we-do-for.jpg"
						alt="we.jpg"
					/>
					<div className={styles.shopnow}>
						<h1>What Do We Do?</h1>
						<h3>
							For this reason,our each and every design serves an idea.Our
							strength in design is reflected by our name,our care for
							details.Our specialist won't be afraid to go extra miles just to
							approachh near perfection
						</h3>
					</div>
				</div>
				<div className={style.aboutcontent}>
					<img
						className={style.image}
						src="https://media.istockphoto.com/photos/vision-mission-values-text-on-sticky-notes-isolated-on-black-desk-picture-id1170204144?k=6&m=1170204144&s=612x612&w=0&h=GWpRDBAwlxC6JVXXhEszzl3Z57U2HU-wjiTVnKR3CfI="
						alt="we.jpg"
					/>
					<div className={styles.shopnow}>
						<h1>Our Mission</h1>
						<h3>
							For this reason,our each and every design serves an idea.Our
							strength in design is reflected by our name,our care for
							details.Our specialist won't be afraid to go extra miles just to
							approachh near perfection
						</h3>
					</div>
				</div>
				<div className={style.aboutcontent}>
					<img
						className={style.image}
						src="https://pbs.twimg.com/media/EXLAvwsWoAAIM2E.jpg"
						alt="we.jpg"
					/>
					<div className={styles.shopnow}>
						<h1>History of us</h1>
						<h3>
							For this reason,our each and every design serves an idea.Our
							strength in design is reflected by our name,our care for
							details.Our specialist won't be afraid to go extra miles just to
							approachh near perfection
						</h3>
					</div>
				</div>
			</div>
			<FooterPage />
		</div>
	);
};
