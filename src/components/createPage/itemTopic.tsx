import React from "react";
import { Col } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

function ItemTopic({ item, onChange }) {
	return (
		<Col span={24}>
			<Title
				editable={{
					onChange: (text) => {
						onChange({ ...item, title: text });
					},
				}}
				level={3}
			>
				{`${item.key}. ${item.title}`}
			</Title>
			<Text
				editable={{
					onChange: (text) => {
						onChange({ ...item, desc: text });
					},
				}}
			>
				{item.desc}
			</Text>
		</Col>
	);
}

export default ItemTopic;
