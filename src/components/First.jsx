import React from "react";

const hello = () => {
	return (
		<div className="container__alt">
			<div className="text__container">
				<h1 className="main-title" id="first_section">
					Hola. <br />
					Soy Juan Felipe
				</h1>
				<p className="phrase" id="first_section">
					Front-end Developer viviendo en Madrid
				</p>
				<div id="first_section">
					<a
						href="https://www.linkedin.com/in/juan-felipe-duarte-monta%C3%B1ez-22505b197/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="material-icons btn_social">person_outline</i>
					</a>
					<a
						href="https://github.com/ElDuartte"
						target="_blank"
						rel="noreferrer"
					>
						<i className="material-icons btn_social right">code</i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default hello;
