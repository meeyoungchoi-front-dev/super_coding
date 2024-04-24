import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({getPaymentFormData}) => {
	const LIST_DATA = {
		Backend: false,
		Frontend: false,
		Fullstack: false,
	}

	const [ devFields, setDevFields ] = React.useState(LIST_DATA);

	const [selectedIds, setSelectedIds] = useState([]);

	const [objectState, setObjectState] = useState({
		name: "",
		price: 0,
		today: new Date(),
		gender: "",
		developmentField: "",
		color: "",
	});

	const inputTextHandler = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			name: event.target.value,
		}));
	};

	const inputPriceHandler = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			price: event.target.value,
		}));
	};

	const inputTodayHandler = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			today: event.target.value,
		}));
	};

	const buttonSubmitHander = (event) => {
		event.preventDefault();
		console.log("selectedIds: ", selectedIds);
		getPaymentFormData(objectState, selectedIds);
		setObjectState({
			name: "",
			price: 0,
			today: new Date(),
			gender: null,
			devFiledList: null,
			color: null,
		});
	};

	const handleChange = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			gender: event.target.value,
		}));
	};

	const handleSelect = (event) => {
		let isSelected = event.target.checked;
		let value = event.target.value;

		if (isSelected) {
			console.log("value: " , value);
			setSelectedIds( [ ...selectedIds, value ])
		} else {
			setSelectedIds((prevData) => {
				prevData.filter((item) => {
					return item!==value;
				})
			})
		}
	};

	const changeColor = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			color: event.target.value,
		}));
	}

	const devFiledList = Object.keys(devFields);

	return (
		<div className="new-payment">
			<form onSubmit={buttonSubmitHander}>
				<div className="new-payment__controls">
					<div className="new-payment__control">
						<label>이름</label>
						<input
							type="text"
							onChange={inputTextHandler}
							value={objectState.name}
						/>
					</div>
					<div className="new-payment__control">
						<label>금액</label>
						<input
							type="number"
							min="0.01"
							step="0.01"
							onChange={inputPriceHandler}
							value={objectState.price}
						/>
					</div>
					<div className="new-payment__control">
						<label>날짜</label>
						<input
							type="date"
							min="2019-01-01"
							max="2023-12-31"
							onChange={inputTodayHandler}
							value={objectState.today}
						/>
					</div>
					<div className="new-payment-div__wrapper">
						<div className="new-payment-radio__control">
							<label for="male">Male</label>
							<input type="radio" id="male" value="male" name="gender" onChange={handleChange}/>
							<label for="female">Female</label>
							<input type="radio" id="female" value="female" name="gender" onChange={handleChange}/>
						</div>
						<div className="new-payment-checkbox__control">
							{devFiledList.map((item) => (
								<div className='checkbox' key={item}>
									<input
										type='checkbox'
										id={item}
										value={item}
										checked={selectedIds.includes(item)}
										onChange={handleSelect}
									/>
									<label for={item}>{item}</label>
								</div>
							))}
						</div>
						<div>
							<input
								type="color"
								onChange={changeColor}
								onInput={console.log.bind(console, 'input from react')}
							/>
						</div>
					</div>
					
				</div>
				<div className="new-payment__actions">
					<button type="submit">결제 추가</button>
				</div>
			</form>
		</div>
	);
};

export default PaymentForm;