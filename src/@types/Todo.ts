export type Todo = {
  id: number;
  title: string;
  label: string;
  description: string;
  assigned_me?: boolean;
  completed: boolean;
};

export type TodoDto = Omit<Todo, "id" | "completed">;
