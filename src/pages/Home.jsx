import React, { useState, useEffect } from "react";
import "../scss/index.scss";

import Loading from "../components/Loader";

import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Power3 from "gsap";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 0);
	});

	gsap.registerPlugin(ScrollTrigger);

	gsap.utils.toArray(".section").forEach((section) => {
		ScrollTrigger.create({
			trigger: section,
			start: "top top",
			pin: true,
			pinSpacing: false,
		});
	});

	//============START text animation===============
	gsap.from("#first_section", {
		duration: 1,
		opacity: 0,
		scale: 1,
		y: -100,
		ease: Power3.easeOut,
		stagger: 0.5,
	});

	gsap.from("#second_section", {
		duration: 2,
		opacity: 0,
		scale: 1,
		x: 100,
		ease: Power3.easeOut,
		stagger: 0.2,
		scrollTrigger: {
			trigger: "#second_section",
			start: "top 80%",
			end: "bottom 5%",
			toggleActions: "restart complete",
		},
	});

	gsap.from("#third_section", {
		duration: 2,
		opacity: 0,
		scale: 1,
		x: -100,
		ease: Power3.easeOut,
		stagger: 0.2,
		scrollTrigger: {
			trigger: "#third_section",
			start: "top 80%",
			end: "bottom 5%",
			toggleActions: "restart complete",
		},
	});

	gsap.from("#fourth_section", {
		duration: 2,
		opacity: 0,
		scale: 1,
		y: 50,
		x: 50,
		ease: Power3.easeOut,
		stagger: 0.2,
		scrollTrigger: {
			trigger: "#fourth_section",
			start: "top 80%",
			end: "bottom 20%",
			toggleActions: "restart complete",
		},
	});
	//============START education logo animation===============
	gsap.from("#logo-edu", {
		duration: 1,
		opacity: 0,
		scale: 1,
		y: 50,
		x: 50,
		ease: Power3.easeOut,
		stagger: 0.2,
		scrollTrigger: {
			trigger: "#logo-edu",
			start: "top 80%",
			end: "bottom 5%",
			toggleActions: "restart complete",
		},
	});
	//============END education logo animation===============

	gsap.from("#fifth_section", {
		duration: 2,
		opacity: 0,
		scale: 1,
		y: 100,
		ease: Power3.easeOut,
		stagger: 0.2,
		scrollTrigger: {
			trigger: "#fifth_section",
			start: "top 90%",
			end: "bottom 5%",
			toggleActions: "restart complete",
		},
	});

	gsap.from("#texts", {
		duration: 3,
		opacity: 0,
		ease: Power3.easeOut,
		scrollTrigger: {
			trigger: "#texts",
			start: "top 80%",
			end: "bottom 5%",
			toggleActions: "restart complete",
		},
	});
	//============END text animation===============

	return (
		<div>
			{isLoading === true ? (
				<Loading />
			) : (
				<>
					<section className="first section">
						<First id="first_section" />
					</section>
					<section className="second section">
						<Second id="second_section" />
					</section>
					<section className="third section">
						<Third id="third_section" />
					</section>
					<section className="fourth section">
						<Fourth id="fourth_section" />
					</section>
					<section className="fifth section">
						<Fifth id="fifth_section" />
					</section>
				</>
			)}
		</div>
	);
}

export default Home;
