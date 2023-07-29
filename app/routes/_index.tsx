import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{todo.text}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
