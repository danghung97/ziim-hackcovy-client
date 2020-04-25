import React, { useState, useEffect } from "react";
import "./style.css";
import { List } from "antd";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";

const listItem = [
	{
		img: require("./img/Slider01.png"),
		title: "We Have Some \n Awesome Courses.",
		desc: null,
	},
	{
		img: require("./img/Slider02.jpg"),
		title: "How to be a better writter",
		desc:
			"This article is floated online with an aim to help you find the best dvd printing solution.\nDvd printing is an important feature used by large and small DVD production houses to print information on DVDs.",
	},
	{
		img: require("./img/Slider03.jpg"),
		title: "Is this the future of \n3D model?",
		desc:
			"While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space.\nIt is those feelings that drive our love of astronomy and our desire to learn more and more about it. ",
	},
	{
		img: require("./img/Slider04.jpg"),
		title: "Cook with Love",
		desc:
			"You should be able to find several indispensable facts about motivation in the following paragraphs. \n If there’s at least one fact you didn’t know before, imagine the difference it might make.",
	},
];

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
			<a href="/create_page" className="create-page" style={{ top: heightScreen - 56 }}>
				<span className="create-text">CREATE PAGE</span>
			</a>
			<List
				grid={{ column: 1 }}
				dataSource={listItem}
				renderItem={(item, index) => {
					return (
						<List.Item>
							{index % 2 === 0 ? <LeftImg img={item} /> : <RightImg img={item} />}
						</List.Item>
					);
				}}
			/>
		</div>
	);
}

export default Home;
