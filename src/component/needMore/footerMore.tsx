import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import "./footerMore.css";
import Text from "antd/lib/typography/Text";

function More({ text }) {
	return (
		<div className="more">
			<CaretRightOutlined />
			<Text
				className="more"
				style={{
					textDecorationLine: "underline",
				}}
			>
				{text}
			</Text>
		</div>
	);
}

export default More;
