import { useEffect, useState } from "react";
import TodoItem from "./todo-item";
import { Todo } from "src/@types/Todo";
import { baseUrl } from "src/config";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    fetch(baseUrl + "/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="flex flex-col w-1/2 grow pt-5 gap-3">
      {!todos ? "Chargement..." : null}

      {todos && !todos?.length ? <p>Aucun ticket</p> : null}

      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
