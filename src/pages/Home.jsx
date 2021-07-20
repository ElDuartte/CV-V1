import React, { useState, useEffect, Suspense } from "react";
import "../scss/main.scss";

// const Hello = lazy(() => import("../components/hello"));
// const About = lazy(() => import("../components/About"));
// const Experiencia = lazy(() => import("../components/Experiencia"));
// const Education = lazy(() => import("../components/Education"));
// const Proyectos = lazy(() => import("../components/Proyectos"));

import Hello from "../components/hello";
import About from "../components/About";
import Experiencia from "../components/Experiencia";
import Education from "../components/Education";
import Proyectos from "../components/Proyectos";
import Loading from "../components/Loader";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Home() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
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
					<section className="section one ">
						{/* <Suspense fallback={<h1>Cargando ...</h1>}> */}
						<Hello />
						{/* </Suspense> */}
					</section>
					<section className="section two">
						{/* <Suspense fallback={<h1>Cargando ...</h1>}> */}
						<About />
						{/* </Suspense> */}
					</section>
					<section className="section three">
						{/* <Suspense fallback={<h1>Cargando ...</h1>}> */}
						<Experiencia />
						{/* </Suspense> */}
					</section>
					<section className="section four">
						{/* <Suspense fallback={<h1>Cargando ...</h1>}> */}
						<Education />
						{/* </Suspense> */}
					</section>
					<section className="section five">
						<Suspense fallback={<h1>Cargando ...</h1>}>
							<Proyectos />
						</Suspense>
					</section>
				</>
			)}
		</div>
	);
}

export default Home;
