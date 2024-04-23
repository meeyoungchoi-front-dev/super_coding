import "./App.css";
import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "수건",
			amount: 3000,
			date: new Date(2023, 11, 13),
		},
	]);

	// 자식 컴포넌트에서 작성한 값을 부모 컴포넌트에서 찍어보기 위해 부모의 상태를 만들어준다
	const [parentObjectState, setParentObjectState] = useState({
		name: "수건",
		price: 3000,
		today: new Date(2023,11,13),
	});

	const getPaymentFormData = (data) => {
		console.log(data);
		// 부모 컴포넌트의 상태를 자식 컴포넌트에 전달
		setExpenses([
			{
				id: Math.random().toString(),
				title: data.name,
				amount: data.price,
				date: data.today,
			},
		]);

	};

	return (
		<>
			<PaymentForm getPaymentFormData={getPaymentFormData} />
			<Expenses items={expenses} />
		</>
	);
}

export default App;