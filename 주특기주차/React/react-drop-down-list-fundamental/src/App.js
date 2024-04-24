import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
	const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "수건",
			amount: 300,
			date: new Date(2022, 3, 14),
		},
		{
			id: "e2",
			title: "물티슈",
			amount: 250,
			date: new Date(2023, 8, 22),
		},
		{
			id: "e3",
			title: "모니터",
			amount: 250,
			date: new Date(2021, 10, 22),
		},
		{
			id: "e4",
			title: "의자",
			amount: 350,
			date: new Date(2022, 1, 31),
		},
		{
			id: "e5",
			title: "의자",
			amount: 450,
			date: new Date(2021, 6, 1),
		},
		{
			id: "e6",
			title: "책상",
			amount: 450,
			date: new Date(2021, 6, 1),
		},
	]);

	const getPaymentFormData = (data) => {
		setExpenses([
			{
				id: Math.random().toString(),
				title: data.name,
				amount: data.price,
				date: new Date(data.today),
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
