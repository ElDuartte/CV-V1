import React from "react";

import logoSass from "../media/logo-sass.png";

const Proyectos = () => (
	<div>
		<div className="inner-container">
			<h3>Proyectos</h3>
			<div className="project-container">
				<img className="projectImage" src={logoSass} alt="Imagen proyecto 1" />
				<img className="projectImage" src={logoSass} alt="Imagen proyecto 2" />
				<img className="projectImage" src={logoSass} alt="Imagen proyecto 3" />
				<img className="projectImage" src={logoSass} alt="Imagen proyecto 4" />
			</div>
		</div>
	</div>
);

export default Proyectos;
