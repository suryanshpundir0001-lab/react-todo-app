import React from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import CounterComponent from './components/CounterCoponent';
import "./style.css";





const App = () => {
  return (
    <div className='todo-container'>
      <Header title="Todo-App"/>
      <ul>
        <CounterComponent/>
        <TodoItem text="Eat"/>
        <TodoItem text="Sleep"/>
        <TodoItem text="Code"/>
        <TodoItem text="Coquer"/>
        <TodoItem text="Repeat"/>

        <Button />
      </ul>
    </div> 
  );
};

export default App;