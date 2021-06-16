import React from "react";

import pdf from "../docs/juan-felipe-duarte.pdf";

import "./styles/About.css";

const About = () => (
	<main className="about" id="about">
		<div className="container-about">
			<h3>Acerca de mi</h3>
			<br />
			<p>
				Soy Juan Felipe Duarte un joven web developer autodidacta enfocado en el
				Front-end. En busqueda de nuevas experiencias, que me permitan poner en
				práctica mis conocimientos en React, JavaScript, HTML5 y Sass
				implementando diseños con Responsive desing.
			</p>
			<br />
			<div className="container-contacto__about">
				<div className="innerContainer-contacto">
					<h3>Contacto</h3>
					<p>
						Juan Felipe Duarte <br /> Madrid, 28032 <br /> jf@duartte.co
					</p>
				</div>
				<br />
				<div className="containerButton">
					<p>Currículum:</p>
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
