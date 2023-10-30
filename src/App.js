import React from 'react';
import './App.css';
import Expenseltem from './components/Expenseltem';
import NoName from './noname';

function App() {
  const $h1 = <h1>메롱메로옹</h1>;
  const $h2 = <h2>반가워용~~~~~~~~~~</h2>;

  return (
    <>
      <NoName />
      <Expenseltem />
      <Expenseltem />
      <Expenseltem />
      <Expenseltem />
      <Expenseltem />
      <div className='App'>
        {$h1}
        <h1>메롱메로옹</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' />
        <p>
          오늘은 월요일입니다~~~ <br />
          그래서 공부하기 싫어요..사실맨날임.
        </p>
      </div>
    </>
  );
}

export default App;
