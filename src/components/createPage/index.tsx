import React, { useState, useCallback } from "react";
import SlideImg from "../../component/slide_Img/SlideImg";
import { Col, Row, Space, Modal, Form, Input, Radio } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import EditableTable from "../../component/editableTable/editTable";
import ItemTopic from "./itemTopic";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./index.css";

const initial = {
	name: "Jane Luna",
	description:
		"Hello. My name is Jane Luna and this is about me. Hello. My name is Jane Luna and this is about me. Hello. My name is Jane Luna and this is about me. Hello. My name is Jane Luna and this is about me.Hello. My name is Jane Luna and this is about me.",
	nameSchedule: "Agenda",
	scheduleDesc: "This is the agenda for the whole meditation course",
	scheduleTable: [
		{
			key: "0",
			section: "Introduction",
			duration: "1.5 hour",
			time: "8am - 02/05/2020",
		},
		{
			key: "1",
			section: "Introduction",
			duration: "1.5 hour",
			time: "8am - 02/05/2020",
		},
	],
	topicCoverUrl:
		"https://trello-attachments.s3.amazonaws.com/5cb6f958ca067478618ae413/5ea2ee7acf0e431048e4e4f2/bbec2740b8c58193322c86121067e657/woman-in-gray-leggings-and-black-tank-top-lying-on-yoga-mat-3823043.jpg",
	defaultTopic: [
		{
			key: 1,
			title: "Introduction",
			desc:
				"You should be able to find several indispensable facts about motivation in the following paragraphs. You should be able to find several indispensable facts about motivation in the following paragraphs. You should be able to find several indispensable facts about motivation in the following paragraphs.",
		},
		{
			key: 2,
			title: "Begining",
			desc:
				"You should be able to find several indispensable facts about motivation in the following paragraphs. You should be able to find several indispensable facts about motivation in the following paragraphs. You should be able to find several indispensable facts about motivation in the following paragraphs",
		},
	],
};

function CreatePage() {
	const [userState, setuserState] = useState(initial);
	const [showSave, setShowSave] = useState(true)
	const {
		name,
		description,
		nameSchedule,
		scheduleDesc,
		topicCoverUrl,
		defaultTopic,
		scheduleTable,
	} = userState;

	const onAddNewRowSchedule = useCallback((newItem) => {
		setShowSave(true)
		setuserState({ ...userState, scheduleTable: [...scheduleTable, newItem] });
	}, [scheduleTable, userState]);

	const onDeleteRowSchedule = useCallback((key) => {
		setShowSave(true)
			setuserState({
				...userState,
				scheduleTable: [...scheduleTable.filter((item) => item.key !== key)],
			});
		},[scheduleTable, userState]
	)
	const onSaveRowSchedule = useCallback((row) => {
		setShowSave(true)
		const newData = [...scheduleTable];
		const index = newData.findIndex((item) => row.key === item.key);
		const item = newData[index];
		newData.splice(index, 1, { ...item, ...row });
		setuserState({
			...userState,
			scheduleTable: newData,
		});
	},[scheduleTable, userState]);

	const onChangeText = useCallback( (item) => {
		setShowSave(true)
		const i = defaultTopic.findIndex((_item) => _item.key === item.key);
		if (i > -1) defaultTopic[i] = item;
		setuserState({ ...userState, defaultTopic });
	}, [defaultTopic, userState]);

	const onClickMore = useCallback(() => {
		setShowSave(true)
		defaultTopic.push({
			key: defaultTopic.length + 1,
			title: "New topic",
			desc: "Decription topic",
		});
		setuserState({ ...userState, defaultTopic });
	}, [defaultTopic, userState]);

	const onClickRegister = () => {};
	const saveAllChanges = useCallback(() => {}, [])
	return (
		<Col span={24}>
			{showSave && <button onClick={saveAllChanges} type="button" className="float" >
				SAVE CHANGES	
			</button>}
			<SlideImg />
			<Space size={50} direction="vertical">
				<Row>
					<Col span="12">
						<img
							alt=""
							src="https://trello-attachments.s3.amazonaws.com/5cb6f958ca067478618ae413/5ea2ee7acf0e431048e4e4f2/9656e2e51abda6070a02552bf421a3ed/woman-holding-disposable-cup-712513.jpg"
							width="100%"
							height="100%"
						/>
					</Col>
					<Col span="12">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
								height: "100%",
							}}
						>
							<Row align="bottom" justify="center" style={{ flex: 2 }}>
								<Col span="20">
									<Title
										style={{ color: "#4D533C" }}
										editable={{
											onChange: (str) => {
												setuserState({ ...userState, name: str });
											},
										}}
									>
										{name}
									</Title>
									<Text
										editable={{
											onChange: (str) => {
												setuserState({ ...userState, description: str });
											},
										}}
									>
										{description}
									</Text>
								</Col>
							</Row>
							<Row align="bottom" justify="end" style={{ flex: 1 }}>
								<Col span={5} className="register" onClick={onClickRegister}>
									REGISTER
								</Col>
								<Col span={3} />
							</Row>
						</div>
					</Col>
				</Row>
				<Col span={24}>
					<Row>
						<Col span={3} />
						<Col>
							<Title
								editable={{
									onChange: (nameSchedule) => {
										setuserState({ ...userState, nameSchedule });
									},
								}}
							>
								{nameSchedule}
							</Title>
							<Text
								editable={{
									onChange: (scheduleDesc) => {
										setuserState({ ...userState, scheduleDesc });
									},
								}}
							>
								{scheduleDesc}
							</Text>
						</Col>
					</Row>
					<Row justify="center" style={{ marginTop: 50 }}>
						<EditableTable
							onAddNewRowSchedule={onAddNewRowSchedule}
							onDeleteRowSchedule={onDeleteRowSchedule}
							onSaveRowSchedule={onSaveRowSchedule}
							data={scheduleTable}
						/>
					</Row>
				</Col>
				<Row>
					<Col span={3} />
					<Col>
						<Title style={{ color: "#4D533C" }}>Topics covered in class</Title>
						<Text>Detailes of information of each topic</Text>
					</Col>
				</Row>
				<img src={topicCoverUrl} alt="" width="100%" />
				<Row>
					<Col span={3} />
					<Col span={18}>
						<Space direction="vertical" size="large">
							{defaultTopic.map((item) => (
								<ItemTopic item={item} onChange={onChangeText} />
							))}
						</Space>
					</Col>
				</Row>
				<Row justify="end">
					<a onClick={onClickMore}>
						<PlusCircleOutlined style={{ fontSize: 36 }} />
					</a>
					<Col span={4} />
				</Row>
			</Space>
		</Col>
	);
}

export default CreatePage;
