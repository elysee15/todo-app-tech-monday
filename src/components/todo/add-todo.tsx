import { TodoDto } from "src/@types/Todo";
import AddTodoForm from "./add-todo-form";
import { FormikHelpers } from "formik";
import { baseUrl } from "src/config";

export default function AddTodo() {
  const handleSubmit = (values: TodoDto, helpers: FormikHelpers<TodoDto>) => {
    fetch(baseUrl + "/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          helpers.resetForm();
        }
      })
      .finally(() => {
        helpers.setSubmitting(false);
      });
  };

  return (
    <div className="w-1/3">
      <AddTodoForm handleSubmit={handleSubmit} />
    </div>
  );
}
