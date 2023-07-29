import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Aldo Todo" },
    { name: "description", content: "Todo App with Remix" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1>Aldo Todo</h1>
    </main>
  )
}
