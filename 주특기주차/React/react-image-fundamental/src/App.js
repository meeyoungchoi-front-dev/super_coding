import AlexaImage from'./images/alexa.png'
import SiriImage from'./images/siri.png'
import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

console.log("AlexaImage", AlexaImage);
console.log("SiriImage", SiriImage);

function App() {
  const [expenses, setExpenses] = useState([
		{
			id: "e1",
			title: "수건",
			amount: 12.33,
			date: new Date(2025, 8, 14),
    },
    {
			id: "e2",
			title: "빗자루",
			amount: 120.33,
			date: new Date(2025, 7, 14),
    },
    {
			id: "e3",
			title: "세탁기",
			amount: 220.33,
			date: new Date(2025, 9, 14),
    },
	]);

	const getPaymentFormData = (data) => {
    console.log('data', data);
    console.log('expenses', expenses);
		setExpenses([
			{
				id: Math.random().toString(),
				title: data.name,
				amount: data.price,
				date: new Date(data.today),
      },
      ...expenses
		]);
	};

  const deleteExpenseItem = (index) => {
    console.log(index);
    // slice
    const beforeArray = expenses.slice(0, index);
    const afterArray = expenses.slice(index + 1);
    setExpenses([...beforeArray, ...afterArray]);
  }



	return (
		<>
    <div className="App">
        <p>hello image</p>
        <img src={AlexaImage} alt="alexa"/>
        <img src={SiriImage} alt="siri"/>
    </div>
			<PaymentForm getPaymentFormData={getPaymentFormData} />
			<Expenses items={expenses} deleteExpenseItem={deleteExpenseItem}/>
		</>
	);
}

export default App;
