import React from "react";

import logoReact from "../media/logo-react.png";
import logoJS from "../media/logo-javascript.png";
import logoSass from "../media/logo-sass.png";
import logoGit from "../media/logo-git.png";
import logoHtml from "../media/logo-html5.png";

const Education = () => (
	<div className="inner-container">
		<h3>Educación</h3>

		<div className="grid-container">
			<div className="gridItem">
				<img className="logoEdu" src={logoReact} alt="Logo React" />
			</div>
			<div className="gridItem">
				<img className="logoEdu" src={logoJS} alt="Logo JavaScript" />
			</div>
			<div className="gridItem">
				<img className="logoEdu" src={logoSass} alt="Logo Sass" />
			</div>
		</div>
		<div className="bottomRow__grid-container">
			<div className="gridItem">
				<img className="logoEdu" src={logoGit} alt="Logo Git" />
			</div>
			<div className="gridItem">
				<img className="logoEdu" src={logoHtml} alt="Logo HTML5" />
			</div>
		</div>
	</div>
);

export default Education;
