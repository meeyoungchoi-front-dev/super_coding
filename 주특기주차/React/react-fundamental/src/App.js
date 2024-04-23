import "./App.css";
import { useState } from "react";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {

	// 자식 컴포넌트에서 작성한 값을 부모 컴포넌트에서 찍어보기 위해 부모의 상태를 만들어준다
	const [parentObjectState, setParentObjectState] = useState({
		name: "",
		price: 0,
		today: new Date()
	})

	const expenses = [
		{
			id: "e1",
			title: "수건",
			amount: 12.33,
			date: new Date(2025, 8, 14),
		},
	];

	const getPaymentFormData = (data) => {
		console.log(data);
	}

	return (
		<>
			<PaymentForm getPaymentFormData={getPaymentFormData} />
			<Expenses items={expenses} />
		</>
	);
}

export default App;