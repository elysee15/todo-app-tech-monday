import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AddTodoForm from "../add-todo-form";

describe("AddTodoForm", () => {
  it("should display error message if title is empty", async () => {
    const handleSubmit = jest.fn();

    render(<AddTodoForm handleSubmit={handleSubmit} />);

    fireEvent.change(
      screen.getByRole("textbox", { name: /titre du ticket \*/i }),
      {
        target: { value: "" },
      }
    );
    // https://github.com/testing-library/user-event/issues/633
    fireEvent.click(screen.getByText("Créer"));

    await waitFor(() => {
      expect(screen.getByText(/le titre est requis/i)).toBeInTheDocument();
    });
  });

  it("should display error message if description is empty", async () => {
    const handleSubmit = jest.fn();

    render(<AddTodoForm handleSubmit={handleSubmit} />);

    // https://github.com/testing-library/user-event/issues/633
    fireEvent.change(
      screen.getByRole("textbox", { name: /description du ticket \*/i }),
      {
        target: { value: " " },
      }
    );
    fireEvent.click(screen.getByText("Créer"));

    await waitFor(() => {
      expect(
        screen.getByText(/la description est requise/i)
      ).toBeInTheDocument();
    });
  });
  it("should display submit form", async () => {
    const handleSubmit = jest.fn();

    render(<AddTodoForm handleSubmit={handleSubmit} />);

    fireEvent.change(
      screen.getByRole("textbox", { name: /titre du ticket \*/i }),
      {
        target: { value: "Test title" },
      }
    );
    fireEvent.change(
      screen.getByRole("textbox", { name: /description du ticket \*/i }),
      {
        target: { value: "Test description" },
      }
    );
    fireEvent.change(screen.getByLabelText("Libellé"), {
      target: { value: "bug" },
    });
    fireEvent.click(screen.getByLabelText("Assigner à moi"));
    fireEvent.click(screen.getByText("Créer"));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
