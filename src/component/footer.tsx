import React, { Component } from "react";
import { Layout, Card, Typography, List, Col, Row, Divider } from "antd";
import { CaretRightOutlined, FacebookFilled } from "@ant-design/icons";
import "./footer.css";

const { Title, Paragraph, Text } = Typography;

const Footer = Layout.Footer;

interface StyleSheetZiim {
	[key: string]: React.CSSProperties;
}

const ziimWork = [
	{
		title: "Create a webpage by Ziim",
		des: "A five-day workshop that will help you answer crucial business questions",
	},
	{
		title: "Schedule online meeting",
		des:
			"A workshop aimed at shaping your business idea, answering questions regarding project planning",
	},
	{
		title: "Provide key",
		des: "An evaluation which will help you radically improve your product.",
	},
	{
		title: "Focus on you",
		des:
			"Do you know what one of the key secrets of success \nis what makes people successful in business",
	},
];

class FooterZiim extends Component {
	render() {
		return (
			<Footer style={{ backgroundColor: "white", paddingLeft: 0, paddingRight: 0 }}>
				{/* how work section */}
				<div
					style={{
						paddingLeft: 100,
						paddingRight: 100,
					}}
				>
					<Title>How Ziim works</Title>
					<List
						grid={{ gutter: 24, column: 4 }}
						dataSource={ziimWork}
						renderItem={(item) => (
							<List.Item>
								<Card
									bordered={false}
									actions={[
										<div>
											<CaretRightOutlined />
											ReadMore
										</div>,
									]}
								>
									<Card.Meta title={item.title} />
									<Paragraph
										className="desc"
										ellipsis={{
											rows: 3,
											expandable: false,
										}}
									>
										{item.des}
									</Paragraph>
								</Card>
							</List.Item>
						)}
					/>
				</div>
				{/* how work section */}

				<div style={{ width: "100%", height: 300 }}>
					<div className="boxTop">
						<Title style={{ color: "#4d533c" }}>
							Let's make something
							<br /> amazing together.
						</Title>
						<div className="letGetStart">
							<CaretRightOutlined />
							LET'S GET STARTED
						</div>
					</div>
					<div className="boxBot">
						<div
							className="boxBotContent"
							style={{
								paddingLeft: 100,
								paddingRight: 100,
							}}
						>
							<Col span={24}>
								<Row gutter={24}>
									<Col style={style.collum} span={6}>
										<Text style={style.boxBotTitleText}>Phone</Text>
										<Text style={style.boxBotWhiteText}>+84 xxxx xxx xxx</Text>
									</Col>
									<Col style={style.collum} span={6}>
										<Text style={style.boxBotTitleText}>Address</Text>
										<Text style={style.boxBotWhiteText}>
											84 Abc Str. Xyz City
										</Text>
									</Col>
								</Row>
								<Row style={style.rowStyle} justify="space-between">
									<Col style={style.collum} span={6}>
										<Text style={style.boxBotWhiteText}>SERVICES</Text>
										<Text style={style.boxBotTitleText}>Strategy Design</Text>
										<Text style={style.boxBotTitleText}>Product Design</Text>
										<Text style={style.boxBotTitleText}>Content Strategy</Text>
										<Text style={style.boxBotTitleText}>Brand Strategy</Text>
										<Text style={style.boxBotTitleText}>Development </Text>
									</Col>
									<Col style={style.collum} span={6}>
										<Text style={style.boxBotWhiteText}>HELP AND ADVICE</Text>
										<Text style={style.boxBotTitleText}>How it works</Text>
										<Text style={style.boxBotTitleText}>Contact Support</Text>
										<Text style={style.boxBotTitleText}>Privacy Policy</Text>
										<Text style={style.boxBotTitleText}>FAQ</Text>
									</Col>

									<Col style={style.collum} span={6}>
										<Text style={style.boxBotWhiteText}>COMPANY</Text>
										<Text style={style.boxBotTitleText}>About</Text>
										<Text style={style.boxBotTitleText}>Blog</Text>
										<Text style={style.boxBotTitleText}>Contact</Text>
										<Text style={style.boxBotTitleText}>Jobs</Text>
									</Col>

									<Col style={style.collum} span={6}>
										<Text style={style.boxBotWhiteText}>GET IN TOUCH</Text>
										<Text style={style.boxBotTitleText}>
											Feel free to get in touch with us vai email
										</Text>
										<Text style={style.boxBotTitleText}>
											info.ziim@gmail.com
										</Text>
									</Col>
								</Row>
							</Col>
							<Divider />
							<img src={require("./../assets/image/ziimLogo.png")} alt="" />
						</div>
					</div>
				</div>
			</Footer>
		);
	}
}

const style: StyleSheetZiim = {
	boxBotTitleText: {
		color: "#b6c197",
		fontSize: 16,
	},
	boxBotWhiteText: {
		fontSize: 20,
		color: "#ffffff",
	},
	collum: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "start",
	},
	rowStyle: {
		width: "100%",

		marginTop: 40,
	},
};

export default FooterZiim;
