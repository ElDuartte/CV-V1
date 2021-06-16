import React, { useRef } from "react";
import About from "../components/About";

import "./styles/Home.scss";

const Home = () => {
	const titleAbout = useRef();

	function handleBackClick() {
		// Scroll back to the title element...
		titleAbout.current.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div>
			<header className="container">
				<h1>
					Hola. <br /> Soy Juan Felipe
				</h1>
				<span className="secondSentence">
					<h2>Front-end Developer viviendo en Madrid</h2>
				</span>

				<button
					onClick={handleBackClick}
					className="fas fa-angle-down scrollDown-button"
				></button>
			</header>
			<div ref={titleAbout}>
				<About />
			</div>
		</div>
	);
};

export default Home;

// className = "smoothScorll";
