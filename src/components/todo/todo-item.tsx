import { Todo } from "src/@types/Todo";
import LabelBadge from "../label-badge";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const { description, title, assigned_me, label } = todo;

  return (
    <div className="border p-2 hover:shadow-md transition-shadow hover:border-green-600">
      <h2>
        {title} <LabelBadge label={label} />
      </h2>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-xs mt-2 italic">
        Assignée à:{" "}
        <span data-testid="assigned_to">
          {assigned_me ? "Moi-meme" : "Non défini"}
        </span>
      </p>
    </div>
  );
}
