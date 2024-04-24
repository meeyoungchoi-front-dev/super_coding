import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState(250);

	const filterChangeHandler = (filteredYear) => {
		setFilteredYear(filteredYear);
	};

	// 아이템들을 필터 연도와 같은것만 먼저 보여준다
	const filteredExpenses = props.items.filter((expenses) => {
		return expenses.amount == filteredYear;
	});

	let expensesContent = <p>값이 없습니다.</p>

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((item) => (
			<ExpenseItem
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		))
	}
	

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{filteredExpenses.length > 0 ?
				 filteredExpenses.map((item) => (
					<ExpenseItem
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				)) : <p>값이 없습니다.</p>
			}
		</Card>
	);
};

export default Expenses;