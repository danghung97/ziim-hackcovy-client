import React from "react";
import { Row, Col } from "antd";

import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import More from "../../component/needMore/footerMore";

function RightImg({ img }) {
	return (
		<Row align="middle">
			<Col span={13}>
				<img src={img.img} alt="" style={{ width: "100%" }} />
			</Col>
			<Col span={11}>
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Col span={14}>
						<Title
							style={{
								color: "#4D533C",
							}}
						>
							{img.title}
						</Title>
						<Text>{img.desc}</Text>
						{img.desc && <More text={" Discover course"} />}
					</Col>
				</div>
			</Col>
		</Row>
	);
}

export default RightImg;
