import React from "react";

import logoBootstrap from "../media/logo-bootstrap.png";

import logoReact from "../media/logo-react.png";
import logoJS from "../media/logo-javascript.png";
import logoSass from "../media/logo-sass.png";

const Proyectos = () => (
	<div>
		<div>
			<h3>Proyectos</h3>
			<h4>Primer proyecto</h4>
			<div className="row pt-4 gy-5">
				<div className="col-12 col-lg-6">
					<img className="projectImage img-fluid" src={logoJS} alt="" />
				</div>
				<div className="col-12 col-lg-6 ">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
						expedita praesentium reiciendis accusamus veritatis fugit quod
						fugiat ratione non deleniti eaque sunt, minima placeat, consequuntur
						rerum officia saepe vero sapiente.
					</p>

					<button type="button" className="btn btn-light w-100">
						Proyecto
					</button>
				</div>
			</div>
			<div className="secondRow pt-5">
				<h4>Segundo proyecto</h4>
				<div className="row pt-3 gy-5">
					<div className="col-12 col-lg-6 ">
						<img className="projectImage img-fluid" src={logoJS} alt="" />
					</div>
					<div className="col-12 col-lg-6 ">
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
							expedita praesentium reiciendis accusamus veritatis fugit quod
							fugiat ratione non deleniti eaque sunt, minima placeat,
							consequuntur rerum officia saepe vero sapiente.
						</p>

						<button type="button" className="btn btn-light w-100">
							Proyecto
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Proyectos;
