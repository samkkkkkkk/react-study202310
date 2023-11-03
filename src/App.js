import React, { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 마스터하기',
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  //input에게 전달할 함수
  const addGoalHandler = (text) => {
    // console.log('전달받은 text: ', text);
    const newGoal = {
      id: Math.random().toString(),
      text: text,
    };

    //상태변수(배열) 수정
    // setGoals([...goals, newGoal]);
    //이 문법을 사용하면 setter메서드의 순서를 보장 받을 수 있다.
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  // 삭제 이벤트 핸들러를 CourseItem까지 내려보내야 됨.
  const deleteGoalHandler = (id) => {
    // console.log('전달된 id: ', id);
    // const updateGoals = [...goals]; //상태 배열 그대로 복사해서 가져옴.
    // // 객체 내부 인덱스를 통해 id를 가져온 후 일치하면 그 값을 저장
    // const index = updateGoals.findIndex((goal) => goal.id === id);
    // updateGoals.splice(index, 1); //배열을 삭제, 객체 요소 추가 기능도 있음
    // console.log(index);
    const updateGoals = goals.filter((goal) => goal.id !== id);

    setGoals(updateGoals);
  };

  // CourseList 조건부 렌더링
  let listContent = (
    <p
      style={{
        color: 'red',
        fontSize: '2em',
        textAlign: 'center',
      }}
    >
      목표를 등록해 주세요!!
    </p>
  );
  if (goals.length > 0) {
    listContent = (
      <CourseList
        items={goals}
        onDelete={deleteGoalHandler}
      />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">{listContent}</section>
    </div>
  );
};

export default App;
