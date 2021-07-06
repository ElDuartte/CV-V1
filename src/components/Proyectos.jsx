import React from "react";

import logoBootstrap from "../media/logo-bootstrap.png";

const Proyectos = () => (
	<div>
		<div className="inner-container">
			<h3>Proyectos</h3>
			<div className="project-container">
				<img
					className="projectImage"
					src={logoBootstrap}
					alt="Imagen proyecto 1"
				/>
				<img
					className="projectImage"
					src={logoBootstrap}
					alt="Imagen proyecto 2"
				/>
				<img
					className="projectImage"
					src={logoBootstrap}
					alt="Imagen proyecto 3"
				/>
				<img
					className="projectImage"
					src={logoBootstrap}
					alt="Imagen proyecto 4"
				/>
			</div>
		</div>
	</div>
);

export default Proyectos;
