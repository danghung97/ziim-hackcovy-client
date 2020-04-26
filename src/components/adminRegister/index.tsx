import React from "react";
import { Col, Form, Input, Row, Button } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

const validateMessages = {
	required: "This field is required!",
	types: {
		email: "'${label}' is not validate email!",
		number: "'${label}' is not a validate number!",
	},
	number: {
		range: "'${label}' must be between ${min} and ${max}",
	},
};

function AdminRegister() {
	const onFinish = (values) => {
		alert(JSON.stringify(values));
	};

	return (
		<Col>
			<img
				src="https://trello-attachments.s3.amazonaws.com/5cb6f958ca067478618ae413/5ea2ee7acf0e431048e4e4f2/5fbec6fd253797e9d9feb611778126f8/bake-bakery-baking-bread-357627.jpg"
				alt=""
				width="100%"
			/>
			<Row>
				<Col span={3} />
				<Col span={18}>
					<Row justify="center" align="middle" style={{ flexDirection: "column" }}>
						<Title
							style={{
								color: "#4D533C",
							}}
						>
							Register form
						</Title>
						<Text>Please fill in the form to register for this course</Text>
					</Row>
					<Form
						layout="vertical"
						onFinish={onFinish}
						validateMessages={validateMessages}
						style={{
							color: "#4D533C",
						}}
						hideRequiredMark={true}
					>
						<Title
							level={3}
							style={{
								color: "#4D533C",
							}}
						>
							User's information
						</Title>
						<Form.Item rules={[{ required: true }]} name="full_name" label="Full name">
							<Input inputMode="text" />
						</Form.Item>
						<Form.Item
							rules={[{ required: true }]}
							label="Personal email"
							name="personal_email"
						>
							<Input inputMode="email" />
						</Form.Item>
						<Form.Item
							rules={[{ required: true }]}
							label="Zoom email "
							name="zoom_email"
						>
							<Input inputMode="email" />
						</Form.Item>
						<Title
							level={3}
							style={{
								color: "#4D533C",
							}}
						>
							Payment information
						</Title>
						<Form.Item
							rules={[{ required: true }]}
							label="Card holder"
							name="card_holder"
						>
							<Input />
						</Form.Item>
						<Form.Item
							rules={[{ required: true }]}
							label="Card number"
							name="card_number"
						>
							<Input />
						</Form.Item>
						Card expiration date
						<Form.Item>
							<Row>
								<Col span={11}>
									<Form.Item rules={[{ required: true, len: 2 }]} name="month">
										<Input
											placeholder="Month"
											inputMode="numeric"
											maxLength={2}
										/>
									</Form.Item>
								</Col>
								<Col span={1} />
								<Col span={11}>
									<Form.Item rules={[{ required: true, len: 4 }]} name="year">
										<Input
											placeholder="Year"
											inputMode="numeric"
											maxLength={4}
										/>
									</Form.Item>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item rules={[{ required: true }]} label="CVV" name="cvv">
							<Input />
						</Form.Item>
						<Form.Item>
							<Button
								block
								type="primary"
								style={{
									backgroundColor: "#E9BE31",
									marginTop: 24,
								}}
								size="large"
								htmlType="submit"
							>
								REGISTER
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</Col>
	);
}

export default AdminRegister;
