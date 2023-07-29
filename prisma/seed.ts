import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type DataTodo = {
  text: string;
  isCompleted?: boolean;
};

const dataTodos: DataTodo[] = [
  { text: "Bangun" },
  { text: "Sarapan" },
  { text: "Mandi" },
];

async function main() {
  // Seed your database here
  // You can do something like this:
  await prisma.todo.createMany({
    data: dataTodos,
  });
}

main()
  .then(async () => {
    console.log("Seeding complete");
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    console.log("Seeding failed");
    prisma.$disconnect();
    process.exit(1);
  });
