import React, { useState } from "react";
import { SliderData } from "./SliderData.jsx";

const Slider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	// console.log(current);

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
							<div>
								<div className="corousel" id="fifth_section">
									<h2 className="title__carousel">Proyectos personales</h2>
									<div className="image__container">
										<img
											src={slide.image}
											alt={slide.alt}
											className="img-project"
											title={slide.titleImg}
										/>
									</div>
									<div className="container-text-card">
										<h3 className="title-project">
											<a
												className="link-title__project"
												href={slide.link}
												target="_blank"
												rel="noreferrer"
											>
												{slide.title}
											</a>
											<a href={slide.link} target="_blank" rel="noreferrer">
												<i className="material-icons btn-link__poject">link</i>
											</a>
										</h3>
										<p className="text-card">{slide.info}</p>
									</div>
									<div className="carousel__actions">
										<button
											id="carousel__btn--prev"
											className="btn"
											onClick={prevSlide}
										>
											<i className="material-icons">arrow_back</i>
										</button>

										<button
											id="carousel__btn--next"
											className="btn"
											onClick={nextSlide}
										>
											<i className="material-icons">arrow_forward</i>
										</button>
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
