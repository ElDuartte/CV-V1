import React, { useState } from "react";
import { SliderData } from "./SliderData.jsx";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	console.log(current);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<div className="slider container">
			{SliderData.map((slide, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<div className="row">
								<img
									src={slide.image}
									alt={slide.alt}
									className="image col-lg-6 col-md-12"
								/>

								<div className="info col-xl-6 col-lg-12">
									<h4>{slide.title}</h4>
									<p className="pb-4">{slide.info}</p>
									<a
										href={slide.link}
										target="_blank"
										rel="noreferrer"
										className="row  btn btn-primary "
									>
										Link del proyecto
									</a>
									<div className="row arrows">
										<FaArrowAltCircleLeft
											className="left-arrow col"
											onClick={prevSlide}
										/>
										<FaArrowAltCircleRight
											className="right-arrow col"
											onClick={nextSlide}
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Slider;
