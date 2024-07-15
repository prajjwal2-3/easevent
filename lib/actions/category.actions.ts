"use server";

import prisma from "../postgresdb";

export async function addCategory(name: string) {
  if (!name) {
    throw new Error("No name provided");
  }

  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });
    return newCategory;
  } catch (err) {
    throw new Error(`Failed to create category: ${err}`);
  }
}
export async function getCategorybyId(id: number) {
  if (!id) {
    throw new Error(`no id provided`);
  }
  try {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw new Error(`No category exist with id: ${id}`);
    }
    return category
  } catch (err) {
    throw new Error(`Failed to get Category ${err}`);
  }
}
export async function getAllCategory() {
  try {
    const allCategory = await prisma.category.findMany({});
    return allCategory;
  } catch (err) {
    throw new Error(`Failed to get all category: ${err}`);
  }
}
