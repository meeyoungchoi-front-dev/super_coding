import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	console.log(props);
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<small>{props.gender}</small>
				<small>${props.developmentField}</small>
				<small>{props.color}</small>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
};

export default ExpenseItem;