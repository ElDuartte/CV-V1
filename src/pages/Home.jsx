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

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 400);
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

	return (
		<div>
			{isLoading === true ? (
				<Loading />
			) : (
				<>
					<section className="first section">
						<First />
					</section>
					<section className="second section">
						<Second />
					</section>
					<section className="third section ">
						<Third />
					</section>
					<section className="fourth section ">
						<Fourth />
					</section>
					<section className="fifth section ">
						<Fifth />
					</section>
				</>
			)}
		</div>
	);
}

export default Home;
