"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addUsers(users: any[]) {
  await db.user.createMany({
    data: users.map((user) => ({
      name: user.label as string,
      email: user.value as string,
    })),
  });
  revalidatePath("/dashboard");
}

export async function getUsers(inputValue: string) {
  return await db.user.findMany({
    where: {
      name: {
        contains: inputValue,
      },
    },
  });
}
