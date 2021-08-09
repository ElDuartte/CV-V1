import React from "react";

import pdf from "../docs/juanFelipeDuarte.pdf";
const About = () => {
	return (
		<main id="about">
			<div className="container">
				<div id="texts">
					<h2 className="title-second" id="second_section">
						Acerca de mi
					</h2>
					<p className="text-second">
						Soy Juan Felipe Duarte, un joven web developer autodidacta enfocado
						en el Front-end. En búsqueda de nuevas experiencias, que me permitan
						poner en práctica mis conocimientos en React, JavaScript, HTML5 y
						Sass implementando diseños con Responsive design.
					</p>
				</div>
				<div className="container__contact-download">
					<div>
						<h2 className="contact-title" id="second_section">
							Contacto
						</h2>
						<p className="text-second" id="texts">
							Juan Felipe Duarte <br />
							Madrid, 28032 <br />
							jf@duartte.co
						</p>
					</div>
					<div id="second_section">
						<h2 className="curriculum-button-title">Currículum:</h2>
						<a href={pdf} download="juanFelipeDuarte" className="button3">
							Descargar
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default About;
