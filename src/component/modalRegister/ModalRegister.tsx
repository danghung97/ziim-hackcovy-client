import React from "react";
import { Modal, Col, Form, Input, Row, Button } from "antd";
import Title from "antd/lib/typography/Title";

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

function ModalRegister({ isvisible, onClose }) {
	const onFinish = (values) => {
		alert(JSON.stringify(values));
	};

	return (
		<Modal
			visible={isvisible}
			bodyStyle={{
				borderWidth: 4,
				borderColor: "#464B36",
				borderStyle: "solid",
			}}
			closable={false}
			footer={null}
			centered
			onCancel={onClose()}
		>
			<Row>
				<Col span={3} />
				<Col span={18}>
					<Form layout="vertical" onFinish={onFinish} validateMessages={validateMessages}>
						<Title level={3}>User's information</Title>
						Personal email
						<Form.Item rules={[{ required: true }]} name="Email">
							<Input inputMode="email" />
						</Form.Item>
						<Title level={3}>Payment information</Title>
						Card holder name
						<Form.Item rules={[{ required: true }]} name="Card holder">
							<Input />
						</Form.Item>
						Card number
						<Form.Item rules={[{ required: true }]} name="Card number">
							<Input />
						</Form.Item>
						Card expiration date
						<Row>
							<Col span={11}>
								<Form.Item rules={[{ required: true, len: 2 }]} name="Month">
									<Input placeholder="Month" inputMode="numeric" maxLength={2} />
								</Form.Item>
							</Col>
							<Col span={1} />
							<Col span={11}>
								<Form.Item rules={[{ required: true, len: 4 }]} name="Year">
									<Input placeholder="Year" inputMode="numeric" maxLength={4} />
								</Form.Item>
							</Col>
						</Row>
						CVV
						<Form.Item rules={[{ required: true }]} name="CVV">
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
		</Modal>
	);
}

export default ModalRegister;
