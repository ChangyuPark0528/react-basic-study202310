import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// import Hello from './Hello';

const App = () => {
  // 지출 항목 객체 배열
  const expenses = [
    {
      id: 1,
      title: '떡볶이+순대',
      price: 18000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 2,
      title: '청년다방 페퍼로니 떡볶이',
      price: 21000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      id: 3,
      title: '반올림피자 페퍼로니',
      price: 25000,
      date: new Date(2020, 7 - 1, 4),
    },
    {
      id: 4,
      title: '엽기떡볶이 마라맛',
      price: 23000,
      date: new Date(2023, 11 - 1, 1),
    },
    {
      id: 5,
      title: '타코야끼',
      price: 4500,
      date: new Date(2021, 12 - 1, 23),
    },
  ];

  // 지출 객체 배열을 상태 변수로 관리
  const [expenseList, setExpenseList] = useState(expenses);

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log('App 컴포넌트에서 응답함!');

    const modifyExpense = {
      ...newExpense,
      id: expenseList[expenseList.length - 1].id + 1,
    };
    console.log(modifyExpense);

    setExpenseList([...expenseList, modifyExpense]);
    console.log(expenseList);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
    </>
  );
};

export default App;
