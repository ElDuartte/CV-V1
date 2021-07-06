import React, { useRef } from "react";

import About from "../components/About";
import Experiencia from "../components/Experiencia";
import Proyectos from "../components/Proyectos";
import Education from "../components/Education";

import "../scss/main.scss";

const Home = () => {
	const titleAbout = useRef();

	function handleBackClick() {
		// Scroll back to the title element...
		titleAbout.current.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div>
			<div className="container">
				<section className="one">
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
						></button>
					</div>
				</section>

				<section className="two" ref={titleAbout}>
					<About />
				</section>
				<br />
				<section className="three">
					<Experiencia />
				</section>
				<section className="four">
					<Education />
				</section>
				<section className="four">
					<Proyectos />
				</section>
				<div className="foot"></div>
				{/* <div ref={titleAbout}>
					<About />
				</div> */}
				{/* <Experiencia /> */}
				{/* <Education /> */}
				{/* <Proyectos /> */}
			</div>
		</div>
	);
};

export default Home;

// className = "smoothScorll";
