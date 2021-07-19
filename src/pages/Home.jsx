import React, { useRef } from "react";
import "../scss/main.scss";

import About from "../components/About";
import Experiencia from "../components/Experiencia";
import Education from "../components/Education";
import Proyectos from "../components/Proyectos";

// const About = lazy(() => import("../components/About"));
// const Experiencia = lazy(() => import("../components/Experiencia"));
// const Education = lazy(() => import("../components/Education"));
// const Proyectos = lazy(() => import("../components/Proyectos"));

const Home = () => {
	const titleAbout = useRef();

	function handleBackClick() {
		// Scroll back to the title element...
		titleAbout.current.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div>
			{/* <div className="container"> */}
			<section className="one ">
				<span>
					<h1>
						Hola. <br /> Soy Juan Felipe
					</h1>
					<span className="secondSentence">
						<h2>Front-end Developer viviendo en Madrid</h2>
					</span>
				</span>
				<div className="btn-holder">
					<button
						onClick={handleBackClick}
						className="fas fa-angle-down scrollDown-button"
						aria-label="Boton siguiente seccion"
					></button>
				</div>
			</section>

			<section className="two" ref={titleAbout}>
				<About />
			</section>

			<section className="three">
				<Experiencia />
			</section>
			<section className="four">
				<Education />
			</section>
			<section className="five">
				<Proyectos />
			</section>

			{/* </div> */}
		</div>
	);
};

export default Home;
