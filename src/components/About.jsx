import React from "react";

import pdf from "../docs/juanFelipeDuarte.pdf";

const About = () => (
	<main className="about" id="about">
		<div>
			<h3>Acerca de mi</h3>
			<br />
			<p>
				Soy Juan Felipe Duarte, un joven web developer autodidacta enfocado en
				el Front-end. En búsqueda de nuevas experiencias, que me permitan poner
				en práctica mis conocimientos en React, JavaScript, HTML5 y Sass
				implementando diseños con Responsive design.
			</p>
			<br />
			<div className="container-contacto__about row mb-5">
				<div className="innerContainer-contacto col">
					<h3>Contacto</h3>
					<p>
						Juan Felipe Duarte <br /> Madrid, 28032 <br /> jf@duartte.co
					</p>
				</div>

				<div className="containerButton col">
					<h4>Currículum:</h4>
					<a
						href={pdf}
						target="_blank"
						download
						rel="noreferrer"
						className="link-Btn"
					>
						Descargar
					</a>
				</div>
			</div>
		</div>
	</main>
);

export default About;
