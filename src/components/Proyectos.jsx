import React from "react";

import logoBootstrap from "../media/logo-bootstrap.png";

const Proyectos = () => (
	<div>
		<div >
			<h3>Proyectos</h3>
			<div className="row">
				<div className="col">
					<img
						className="projectImage mx-auto d-block "
						src={logoBootstrap}
						alt="Imagen proyecto 1"
					/>
				</div>
				<div className="col">
					<img
						className="projectImage mx-auto d-block "
						src={logoBootstrap}
						alt="Imagen proyecto 1"
					/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<img
						className="projectImage mx-auto d-block "
						src={logoBootstrap}
						alt="Imagen proyecto 1"
					/>
				</div>
				<div className="col">
					<img
						className="projectImage mx-auto d-block "
						src={logoBootstrap}
						alt="Imagen proyecto 1"
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Proyectos;
