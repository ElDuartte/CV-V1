import React from "react";

import logoReact from "../media/logos-ed/logo-react.webp";
import logoJS from "../media/logos-ed/logo-javascript.webp";
import logoSass from "../media/logos-ed/logo-sass.webp";
import logoGit from "../media/logos-ed/logo-git.webp";
import logoHtml from "../media/logos-ed/logo-html5.webp";
import logoBootstrap from "../media/logos-ed/logo-bootstrap.webp";

function Education() {
	return (
		<div className="container">
			<div id="fourth_section">
				<h2>Tecnologías</h2>
				<p className="text-fourth">
					Estas son algunas de las herramientas con las que trabajo.
				</p>
			</div>
			<div className="grid-container">
				<div id="logo-edu" className="item__gridEdu">
					<img
						src={logoReact}
						alt="Logo de React"
						className="logo-edu"
						title="React"
					/>
				</div>
				<div id="logo-edu" className="item__gridEdu">
					<img
						src={logoJS}
						alt="Logo de JavaScript"
						className="logo-edu"
						title="JavaScript"
					/>
				</div>
				<div id="logo-edu" className="item__gridEdu">
					<img
						src={logoSass}
						alt="Logo de SASS"
						className="logo-edu"
						title="SASS"
					/>
				</div>
				<div id="logo-edu" className="item__gridEdu">
					<img
						src={logoHtml}
						alt="Logo de HTML5"
						className="logo-edu"
						title="HTML5"
					/>
				</div>
				<div id="logo-edu" className="item__gridEdu last">
					<img
						src={logoGit}
						alt="Logo de GIT"
						className="logo-edu"
						title="GIT"
					/>
				</div>
				<div id="logo-edu" className="item__gridEdu last-last">
					<img
						src={logoBootstrap}
						alt="Logo de Bootstrap"
						className="logo-edu"
						title="Bootstrap"
					/>
				</div>
			</div>
		</div>
	);
}

export default Education;
