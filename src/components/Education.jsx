import React, { useRef, useEffect } from "react";

import logoReact from "../media/logos-ed/logo-react.webp";
import logoJS from "../media/logos-ed/logo-javascript.webp";
import logoSass from "../media/logos-ed/logo-sass.webp";
import logoGit from "../media/logos-ed/logo-git.webp";
import logoHtml from "../media/logos-ed/logo-html5.webp";
import logoBootstrap from "../media/logos-ed/logo-bootstrap.webp";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Education() {
	let logoR = useRef(null);
	let logoJ = useRef(null);
	let logoS = useRef(null);
	let logoG = useRef(null);
	let logoH = useRef(null);
	let logoB = useRef(null);

	useEffect(() => {
		// gsap.to(app, { duration: 0, visibility: "visible" });
		gsap.from([logoR, logoJ, logoS, logoG, logoH, logoB], {
			duration: 1,
			opacity: 0,
			scale: 1,
			y: 50,
			x: 50,
			ease: Power3.easeOut,
			stagger: 0.2,
			scrollTrigger: {
				trigger: [logoR, logoJ, logoS, logoG, logoH, logoB],

				start: "top 80%",
				end: "bottom 5%",
				toggleActions: "restart complete",
			},
		});
	}, []);

	return (
		<div className="container">
			<h3>Tecnologías:</h3>
			<div className="row">
				<div className="col-6 col-sm-12 col-lg-4 " ref={(el) => (logoR = el)}>
					<img
						className="logoEdu  mx-auto d-block"
						src={logoReact}
						alt="Logo React"
					/>
				</div>

				<div className="col-6 col-sm-12 col-lg-4 " ref={(el) => (logoJ = el)}>
					<img
						className="logoEdu  mx-auto d-block"
						src={logoJS}
						alt="Logo JavaScript"
					/>
				</div>

				<div className="col-6 col-sm-12 col-lg-4 " ref={(el) => (logoS = el)}>
					<img
						className="logoEdu  mx-auto d-block"
						src={logoSass}
						alt="Logo Sass"
					/>
				</div>

				<div className="col-6 col-sm-12 col-lg-4 " ref={(el) => (logoG = el)}>
					<img
						className="logoEdu  mx-auto d-block"
						src={logoGit}
						alt="Logo Git"
					/>
				</div>

				<div className="col-6 col-sm-12 col-lg-4 " ref={(el) => (logoH = el)}>
					<img
						className="logoEdu img-fluid mx-auto d-block"
						src={logoHtml}
						alt="Logo HTML5"
					/>
				</div>

				<div className="col-6 col-sm-12 col-lg-4 " ref={(el) => (logoB = el)}>
					<img
						className="logoEdu img-fluid mx-auto d-block"
						src={logoBootstrap}
						alt="Logo Bootstrap"
					/>
				</div>
			</div>
		</div>
	);
}

export default Education;
