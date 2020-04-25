import React, { useState, useEffect } from "react";
import "./style.css";
import FooterZiim from "../../component/footer";

function Home() {
	const [widthScreen, setWidthScreen] = useState(window.innerWidth);
	const [heightScreen, setHeightScreen] = useState(window.innerHeight);

	useEffect(() => {
		function updateSize() {
			setWidthScreen(window.innerWidth);
			setHeightScreen(window.innerHeight);
		}
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	console.log(widthScreen, heightScreen);
	return (
		<div className="container" style={{ width: widthScreen }}>
			<div className="introduce" style={{ height: heightScreen, width: widthScreen }}>
				<div className="introduce-text">
					<p className="text1">A place where</p>
					<p className="text2">Helps you get to closer to your customers</p>
					<p className="text1">
						ziim is a leading tool that help you to build your webpage and connect with
						your customers
					</p>
					<div style={{ marginTop: "47px" }}>
						<p className="icon"></p>
						<a className="text3" href="https://www.google.com">
							Get in touch
						</a>
					</div>
				</div>
			</div>
			<div className="create-page" style={{ top: heightScreen - 56 }}>
				<span className="create-text">CREATE PAGE</span>
			</div>
			<div className="slider01">
				<div
					className="slider-image"
					style={{ width: widthScreen / 2 + 15, height: "510px" }}
				></div>
				<div className="slider-text" style={{ maxWidth: widthScreen / 2 - 15 }}>
					<span style={{ marginLeft: "60px", display: "inline-block" }}>
						We Have Some Awesome Courses
					</span>
				</div>
			</div>
		</div>
	);
}

export default Home;
