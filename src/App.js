import React from 'react';
import './App.css';
import Expenseitem from './components/Expenseitem';

const App = () => {
  //지출 항목 개체 배열

  const expense = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3, 23),
    },
    {
      title: 'BBQ치킨',
      price: 2000,
      date: new Date(2023, 3, 23),
    },
    {
      title: '도미노피자',
      price: 2000,
      date: new Date(2023, 3, 23),
    },
  ];

  return (
    <>
      <Expenseitem
        title={expense[0].title}
        price={expense[0].price}
        date={expense[0].date}
      />
      <Expenseitem
        title={expense[1].title}
        price={expense[1].price}
        date={expense[1].date}
      />
      <Expenseitem
        title={expense[2].title}
        price={expense[2].price}
        date={expense[2].date}
      />
    </>
  );
};

export default App;
