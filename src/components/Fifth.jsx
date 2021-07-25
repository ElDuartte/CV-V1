import React from "react";

import Slider from "./Slider.jsx";
import { SliderData } from "./SliderData.jsx";

function Proyectos() {
	return (
		<div>
			<Slider slides={SliderData} />
		</div>
	);
}

export default Proyectos;
