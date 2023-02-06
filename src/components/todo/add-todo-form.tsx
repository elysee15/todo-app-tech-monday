import classNames from "classnames";
import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import { TodoDto } from "src/@types/Todo";
import * as Yup from "yup";

type AddTodoFormProps = {
  handleSubmit: (values: any, helpers: FormikHelpers<any>) => void;
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Le titre est requis").trim(),
  description: Yup.string().required("La description est requise").trim(),
  assigned_me: Yup.boolean(),
  label: Yup.string().required(),
}) satisfies Yup.SchemaOf<TodoDto>;

const initialValues = {
  title: "",
  description: "",
  assigned_me: true,
  label: "",
} satisfies TodoDto;

export default function AddTodoForm({ handleSubmit }: AddTodoFormProps) {
  return (
    <Formik<TodoDto>
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ getFieldProps, isSubmitting }) => (
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <fieldset className="flex flex-col">
              <label htmlFor="title" className="text-sm">
                Titre du ticket <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="Ajouter un ticket..."
                className="border p-4"
                {...getFieldProps("title")}
              />
              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-xs"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="description" className="text-sm">
                Description du ticket <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                placeholder="Ajouter un ticket..."
                className="border p-4"
                {...getFieldProps("description")}
              />
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-500 text-xs"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="label" className="text-sm">
                Libellé
              </label>
              <select id="label" className="p-2" {...getFieldProps("label")}>
                <option value="bug">Bug</option>
                <option value="documentation">Documentation</option>
                <option value="feature">Feature</option>
              </select>
            </fieldset>
            <fieldset className="">
              <input
                id="assigned_me"
                type="checkbox"
                {...getFieldProps("assigned_me")}
              />
              <label htmlFor="assigned_me" className="text-sm ml-2">
                Assigner à moi
              </label>
            </fieldset>
          </div>
          <button
            data-testid="submit"
            type="submit"
            className={classNames(
              "p-4 bg-green-700 border border-green-700 text-white disabled:border-green-700/10 disabled:bg-green-700/50"
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Création..." : "Créer"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
