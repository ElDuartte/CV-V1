import React from "react";

import logoReact from "../media/logo-react.png";
import logoJS from "../media/logo-javascript.png";
import logoSass from "../media/logo-sass.png";
import logoGit from "../media/logo-git.png";
import logoHtml from "../media/logo-html5.png";
import logoBootstrap from "../media/logo-bootstrap.png";

const Education = () => (
	<div>
		<br />
		<br />
		<h3>Tecnologías:</h3>
		<div className="row">
			<div className="col-6 col-lg-4">
				<img
					className="logoEdu  mx-auto d-block"
					src={logoReact}
					alt="Logo React"
				/>
			</div>

			<div className="col-6 col-lg-4">
				<img
					className="logoEdu  mx-auto d-block"
					src={logoJS}
					alt="Logo JavaScript"
				/>
			</div>

			<div className="col-6 col-lg-4">
				<img
					className="logoEdu  mx-auto d-block"
					src={logoSass}
					alt="Logo Sass"
				/>
			</div>

			<div className="col-6 col-lg-4">
				<img
					className="logoEdu  mx-auto d-block"
					src={logoGit}
					alt="Logo Git"
				/>
			</div>

			<div className="col-6 col-lg-4">
				<img
					className="logoEdu img-fluid mx-auto d-block"
					src={logoHtml}
					alt="Logo HTML5"
				/>
			</div>

			<div className="col-6 col-lg-4">
				<img
					className="logoEdu img-fluid mx-auto d-block"
					src={logoBootstrap}
					alt="Logo Bootstrap"
				/>
			</div>
		</div>
	</div>
);

export default Education;
