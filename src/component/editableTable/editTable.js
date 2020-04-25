import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Popconfirm, Form, Col, Row } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
	const [form] = Form.useForm();
	return (
		<Form form={form} component={false}>
			<EditableContext.Provider value={form}>
				<tr {...props} />
			</EditableContext.Provider>
		</Form>
	);
};

const EditableCell = ({
	title,
	editable,
	children,
	dataIndex,
	record,
	handleSave,
	...restProps
}) => {
	const [editing, setEditing] = useState(false);
	const inputRef = useRef();

	const form = useContext(EditableContext);
	useEffect(() => {
		if (editing) {
			inputRef.current.focus();
		}
	}, [editing]);

	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({
			[dataIndex]: record[dataIndex],
		});
	};

	const save = async (e) => {
		try {
			const values = await form.validateFields();
			toggleEdit();
			handleSave({ ...record, ...values });
		} catch (errInfo) {
			console.log("Save failed:", errInfo);
		}
	};

	let childNode = children;

	if (editable) {
		childNode = editing ? (
			<Form.Item
				style={{
					margin: 0,
				}}
				name={dataIndex}
				rules={[
					{
						required: true,
						message: `${title} is required.`,
					},
				]}
			>
				<Input ref={inputRef} onPressEnter={save} onBlur={save} />
			</Form.Item>
		) : (
			<div
				className="editable-cell-value-wrap"
				style={{
					paddingRight: 24,
				}}
				onClick={toggleEdit}
			>
				{children}
			</div>
		);
	}

	return <td {...restProps}>{childNode}</td>;
};

export default class EditableTable extends React.Component {
	constructor(props) {
		super(props);
		this.columns = [
			{
				title: "Secction",
				dataIndex: "section",
				width: "30%",
				editable: true,
			},
			{
				title: "Duration",
				dataIndex: "duration",
				editable: true,
			},
			{
				title: "Time",
				dataIndex: "time",
				editable: true,
			},
			{
				title: "",
				dataIndex: "operation",
				render: (text, record) =>
					this.state.dataSource.length >= 1 ? (
						<Popconfirm
							title="Sure to delete?"
							onConfirm={() => this.handleDelete(record.key)}
						>
							<a>Delete</a>
						</Popconfirm>
					) : null,
			},
		];
		this.state = {
			dataSource: [
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
			count: 2,
		};
	}

	handleDelete = (key) => {
		this.props.onDeleteRowSchedule(key);
	};

	handleAdd = () => {
		const newData = {
			key: this.props.data.length + 1,
			section: `Click to edit here`,
			duration: "Click to edit here",
			time: "Click to edit here",
		};
		this.props.onAddNewRowSchedule(newData);
	};

	handleSave = (row) => {
		this.props.onSaveRowSchedule(row);
	};

	render() {
		const components = {
			body: {
				row: EditableRow,
				cell: EditableCell,
			},
		};
		const columns = this.columns.map((col) => {
			if (!col.editable) {
				return col;
			}

			return {
				...col,
				onCell: (record) => ({
					record,
					editable: col.editable,
					dataIndex: col.dataIndex,
					title: col.title,
					handleSave: this.handleSave,
				}),
			};
		});
		return (
			<Col span={18}>
				<Row justify="center">
					<Table
						components={components}
						rowClassName={() => "editable-row"}
						dataSource={this.props.data}
						columns={columns}
						pagination={false}
						bordered
						style={{
							width: "100%",
						}}
					/>
				</Row>
				<Row justify="end" style={{ marginTop: 16 }}>
					<a onClick={this.handleAdd}>
						<PlusCircleOutlined style={{ fontSize: 36 }} />
					</a>
				</Row>
			</Col>
		);
	}
}
