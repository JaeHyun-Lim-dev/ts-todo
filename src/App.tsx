/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";

interface Task {
  content: string;
  id: number;
}

function App() {
  const [todos, setTodos] = useState<Array<Task>>([]);
  const [todoText, setTodoText] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const welcome = () => {
    return <div>welcome! 할 일을 추가해보세요!</div>;
  };

  const addTodo = (t: string) => {
    console.log(t);
    setTodos((todos) => [...todos, { content: t, id: count + 1 }]);
    setCount(count + 1);
    setTodoText("");
  };
  const removeTodo = (id: number) => {
    setTodos((todos) => todos.filter((value) => value.id !== id));
  };

  return (
    <>
      <h1>TODO List!</h1>
      <div>
        <input
          placeholder="할 일 추가하기"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodoText(e.target?.value)
          }
          value={todoText}
        ></input>
        <button onClick={() => addTodo(todoText)}> + </button>
      </div>
      <div>
        {todos.length ? (
          <div>
            {todos?.map((todo) => {
              return (
                <div key={todo.id}>
                  {todo.content}
                  <button onClick={() => removeTodo(todo.id)}>x</button>
                </div>
              );
            })}
          </div>
        ) : (
          welcome()
        )}
      </div>
    </>
  );
}

export default App;
