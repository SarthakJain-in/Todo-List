import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { useState } from "react";
import { getTodoData, setTodoData } from "./LocalStorageTodo";

export const Todo = () => {
  const [task, setTask] = useState(() => getTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // Cheak if field is empty
    if (!content) return;

    //check is task/content is already exist
    // if(task.includes(content)) return ;
    const ifTaskExist = task.find((curTask) => curTask.content === content);
    if (ifTaskExist) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // add data to Local Storage
  setTodoData(task);

  const handleDelete = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleChecked = (data) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === data) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  const handleDeleteAll = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDateTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDelete={handleDelete}
                onHandleChecked={handleChecked}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleDeleteAll}>
          Clear All
        </button>
      </section>
    </section>
  );
};
