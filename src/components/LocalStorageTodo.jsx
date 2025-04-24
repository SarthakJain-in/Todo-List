const todokey = "reactTodo";

export const getTodoData = () => {
    const storedTodoData = localStorage.getItem(todokey);
    if(!storedTodoData) return [];

    return JSON.parse(storedTodoData);
}

export const setTodoData = (task) => {
    return localStorage.setItem(todokey, JSON.stringify(task));
}