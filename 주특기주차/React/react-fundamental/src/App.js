import "./App.css";
import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
	// 부모 컴포넌트의 상태를 자식 컴포넌트에 전달
	const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "수건",
			amount: 3000,
			date: new Date(2023, 11, 15),
			gender: "male",
			developmentField: "frontend",
		},
	]);

	// 자식 컴포넌트에서 작성한 값을 부모 컴포넌트에서 찍어보기 위해 부모의 상태를 만들어준다
	const getPaymentFormData = (data) => {
		console.log(data);
		// 부모컴포넌트에서 받은 값을 또 다른 자식 컴포넌트의 UI에 자동으로 업데이트 해준다
		setExpenses([
			{
				id: Math.random().toString(),
				title: data.name,
				amount: data.price,
				date: data.today,
				gender: data.gender,
				developmentField: data.developmentField,
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