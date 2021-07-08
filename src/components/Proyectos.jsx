import React from "react";

import Slider from "./Slider.jsx";
import { SliderData } from "./SliderData.jsx";

function Proyectos() {
	return (
		<div>
			<h3>Proyectos</h3>
			<Slider slides={SliderData} />
		</div>
	);
}

export default Proyectos;
