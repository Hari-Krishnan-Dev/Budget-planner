import React, { useState } from 'react';
import Budget from './Budget';
import Remaining from './Remaining';
import SpentSoFar from './SpentSoFar';
import Expenses from './Expenses';
import AddExpense from './AddExpense';
import "./App.css"

function App() {
  const [expenses, setExpenses] = useState([]);
  const [spentSoFar, setSpentSoFar] = useState(0);
  const budget = 2000;

  const addExpense = (name, cost) => {
    setExpenses([...expenses, { name, cost }]);
    setSpentSoFar(spentSoFar + cost);
  };
  const removeExpense = (index) => {
    const expenseToRemove = expenses[index];
    setSpentSoFar(spentSoFar - expenseToRemove.cost);
    setExpenses(expenses.filter((_, i) => i !== index));
  };


  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <div className='nav'>
      <Budget budget={budget} />
      <Remaining budget={budget} spentSoFar={spentSoFar} />
      <SpentSoFar spentSoFar={spentSoFar} />
      </div>
      <Expenses expenses={expenses} removeExpense={removeExpense} />
      <AddExpense addExpense={addExpense} />
    </div>
  );
}

export default App;
