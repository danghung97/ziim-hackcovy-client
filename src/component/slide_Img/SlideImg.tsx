import React from "react";
import { Carousel, Col } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

const imgsList = [
	{
		url:
			"https://trello-attachments.s3.amazonaws.com/5cb6f958ca067478618ae413/5ea2ee7acf0e431048e4e4f2/2fe99022d4c36efce0c05d0b08dac133/girl-writing-on-a-black-keyboard-6469.jpg",
	},
	{
		url:
			"https://trello-attachments.s3.amazonaws.com/5cb6f958ca067478618ae413/5ea2ee7acf0e431048e4e4f2/a38272ea8f3950094bc80b2d045c15ac/white-rose-1713953.jpg",
	},
	{
		url:
			"https://trello-attachments.s3.amazonaws.com/5cb6f958ca067478618ae413/5ea2ee7acf0e431048e4e4f2/c5d1a950fa5c5f90c60838d3b5d1d0d6/woman-in-gray-leggings-and-black-tank-top-lying-on-yoga-mat-3823043.jpg",
	},
	{
		url:
			"https://trello-attachments.s3.amazonaws.com/5cb6f958ca067478618ae413/5ea2ee7acf0e431048e4e4f2/5fbec6fd253797e9d9feb611778126f8/bake-bakery-baking-bread-357627.jpg",
	},
];

function SlideImg() {
	return (
		<Col style={{ height: "max-content" }}>
			<div style={{ position: "relative", width: "100%" }}>
				{/* <Carousel autoplay autoplaySpeed={3000}>
					{imgsList.map(({ url }) => (
						<div>
							<img src={url} alt="" height="500px" width="100%" />
						</div>
					))}
				</Carousel> */}
				<img src={imgsList[3].url} alt="" width="100%" />
			</div>
			<Col
				style={{
					position: "relative",
					zIndex: 10,
					overflow: "visible",
					marginTop: "-300px",
					height: "300px",
					marginLeft: "10%",
				}}
				span={10}
			>
				<Text style={{ color: "#ffffff" }}>A place where </Text>
				<Title style={{ color: "#ffffff" }}>Begining of mediatation</Title>
				<Text style={{ color: "#ffffff" }}>
					ziim is a leading tool that help you to build your webpage and connect with your
					customers.
				</Text>
			</Col>
		</Col>
	);
}

export default SlideImg;
