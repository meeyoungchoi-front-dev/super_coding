import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({getPaymentFormData}) => {
	const [objectState, setObjectState] = useState({
		name: "",
		price: 0,
		today: new Date(),
		gender: "",
		developmentField: "",
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
		getPaymentFormData(objectState);
		setObjectState({
			name: "",
			price: 0,
			today: new Date(),
			gender: "",
			developmentField: "",
		});
	};

	const handleChange = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			gender: event.target.value,
		}));
	};

	const handleCheckboxChange = (event) => {
		setObjectState((prevState) => ({
			...prevState,
			developmentField: event.target.value,
		}));
	};

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
							<label for="backend">backend</label>
							<input type="checkbox" id="backend" value="backend" name="developmentField" onChange={handleCheckboxChange}/>
							<label for="frontend">frontend</label>
							<input type="checkbox" id="frontend" value="frontend" name="developmentField" onChange={handleCheckboxChange}/>
							<label for="fullstack">fullstack</label>
							<input type="checkbox" id="fullstack" value="fullstack" name="developmentField" onChange={handleCheckboxChange}/>
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