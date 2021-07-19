import React, { useRef, useEffect } from "react";

import logoReact from "../media/logo-react.png";
import logoJS from "../media/logo-javascript.png";
import logoSass from "../media/logo-sass.png";
import logoGit from "../media/logo-git.png";
import logoHtml from "../media/logo-html5.png";
import logoBootstrap from "../media/logo-bootstrap.png";

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
		// gsap.from([logoR, logoJ, logoS, logoG, logoH, logoB], {
		// 	duration: 1,
		// 	scale: 0.1,
		// 	y: 40,
		// 	ease: "power1.inOut",
		// 	stagger: {
		// 		grid: [7, 15],
		// 		from: "random",
		// 		axis: "x",
		// 		ease: "power3.inOut",
		// 		amount: 1.5,
		// 	},
		// });
	}, []);

	return (
		<div>
			<br />
			<br />
			<h3>Tecnologías:</h3>
			<div className="row">
				<div className="col-6 col-lg-4" ref={(el) => (logoR = el)}>
					<img
						className="logoEdu  mx-auto d-block"
						src={logoReact}
						alt="Logo React"
					/>
				</div>

				<div className="col-6 col-lg-4" ref={(el) => (logoJ = el)}>
					<img
						className="logoEdu  mx-auto d-block"
						src={logoJS}
						alt="Logo JavaScript"
					/>
				</div>

				<div className="col-6 col-lg-4" ref={(el) => (logoS = el)}>
					<img
						className="logoEdu  mx-auto d-block"
						src={logoSass}
						alt="Logo Sass"
					/>
				</div>

				<div className="col-6 col-lg-4" ref={(el) => (logoG = el)}>
					<img
						className="logoEdu  mx-auto d-block"
						src={logoGit}
						alt="Logo Git"
					/>
				</div>

				<div className="col-6 col-lg-4" ref={(el) => (logoH = el)}>
					<img
						className="logoEdu img-fluid mx-auto d-block"
						src={logoHtml}
						alt="Logo HTML5"
					/>
				</div>

				<div className="col-6 col-lg-4" ref={(el) => (logoB = el)}>
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
