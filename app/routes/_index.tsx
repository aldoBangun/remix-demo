import type { LoaderArgs, ActionArgs, V2_MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Aldo Todo" },
    { name: "description", content: "Todo App with Remix" },
  ];
};

export const loader = async ({ request }: LoaderArgs) => {
  const todos = await prisma.todo.findMany();
  return todos;
};

export default function Index() {
  const todos = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Aldo Todo</h1>

      <Form method="POST">
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Enter your todo..."
        />

        <button type="submit">Add Todo</button>
      </Form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.text}</p>
              <p>{todo.createdAt}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const newTodo = { text: String(form.get("text")) };
  await prisma.todo.create({ data: newTodo });
  return null;
};
