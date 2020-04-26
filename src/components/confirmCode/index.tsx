import React from "react";
import { Row, Col, Form, Button, Input } from "antd";
import Title from "antd/lib/typography/Title";

function ConfirmCode() {
	const validateMessages = {
		required: "${name} is required!",
		types: {
			email: "'${label}' is not validate email!",
			number: "'${label}' is not a validate number!",
		},
		number: {
			range: "'${label}' must be between ${min} and ${max}",
		},
	};

	const onFinish = (values) => {
		alert(JSON.stringify(values));
	};

	return (
		<Row
			style={{
				paddingTop: 100,
			}}
		>
			<Col span={9} />
			<Col span={6}>
				<Row justify="center" align="middle">
					<Title
						style={{
							color: "#4D533C",
						}}
						level={3}
					>
						Enter your class code
					</Title>
					<Form
						validateMessages={validateMessages}
						onFinish={onFinish}
						style={{
							width: "100%",
						}}
					>
						<Form.Item name="Code" rules={[{ required: true }]}>
							<Input />
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								block
								style={{
									backgroundColor: "#E9BE31",
								}}
							>
								JOIN CLASS
							</Button>
						</Form.Item>
					</Form>
				</Row>
			</Col>
		</Row>
	);
}

export default ConfirmCode;
