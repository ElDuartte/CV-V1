import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
	return (
		<div className="loader-page">
			<Loader
				className="loader-logo"
				type="Puff"
				color="#f1e9db"
				height={200}
				width={200}
			/>
		</div>
	);
};

export default Loading;
