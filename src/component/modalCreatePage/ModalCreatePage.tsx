import React from "react";
import { Modal, Row, Col, Form, Input, Button } from "antd";

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "'${label}' is not validate email!",
		number: "'${label}' is not a validate number!",
	},
	number: {
		range: "'${label}' must be between ${min} and ${max}",
	},
};

function ModalCreatePage({ isVisible, onclose }) {
	const onFinish = (values) => {
		alert(JSON.stringify(values));
	};

	return (
		<Modal
			visible={isVisible}
			closable={false}
			bodyStyle={{
				borderWidth: 4,
				borderColor: "#464B36",
				borderStyle: "solid",
			}}
			footer={null}
			onCancel={onclose}
		>
			<Row align="middle" justify="center">
				<Col span={18}>
					<Form
						hideRequiredMark={true}
						onFinish={onFinish}
						layout="vertical"
						validateMessages={validateMessages}
					>
						<Form.Item
							rules={[{ required: true }]}
							label="Personal email"
							name="personal_email"
						>
							<Input inputMode="email" />
						</Form.Item>
						<Form.Item
							rules={[{ required: true }]}
							name="num_tickets"
							label="Number of tickets"
						>
							<Input inputMode="text" />
						</Form.Item>
						<Form.Item rules={[{ required: true }]} name="url" label="URL">
							<Input inputMode="text" />
						</Form.Item>
						<Form.Item
							rules={[{ required: true }]}
							name="web_name"
							label="Webpage name"
						>
							<Input inputMode="text" />
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
								CREATE PAGE
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</Modal>
	);
}

export default ModalCreatePage;
