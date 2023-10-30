import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트 기초',
      checked : true,
    },
    {
      id : 2,
      text : '이닦기',
      checked : false,
    },
 

  ]);

  const nextId = useRef(3);

  const onInsert = useCallback(
    (text)=>{
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
  }, [todos]);

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo=> todo.id !== id));
      },[todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo => id === todo.id ? { ...todo, checked : !todo.checked} : todo));
      },[todos],
  )


  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
